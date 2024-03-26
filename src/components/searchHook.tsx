import axios from "axios";
import { useState } from "preact/hooks";
import { apiUrl } from "../config";
import { ColumnName } from "../types";

export function searchHook() {
	const [ searchResults, setSearchResults ] = useState([]);
	const [schema, setSchema] = useState([]);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const [ page, setPage ] = useState( 1 );

	const page_length = 25;

	const fetchData = async ( sort_by?:ColumnName, page:Number=1 ) => {
		try {
			const response = !sort_by ? 
			await axios.get( `${apiUrl}/patterns?page=${page}&?page_length=${page_length}` ) :
			await axios.get( `${apiUrl}/patterns?SortBy=${sort_by}` );

			setSearchResults( response.data );
		} catch ( error ) {
				setError( error );
		} finally {
				setLoading(false);
		}
	};
	
	const fetchSchema = async () => {
		try {
				const response = await axios.get(`${apiUrl}/schema`);
				setSchema(response.data);
		} catch (error) {
				setError(error);
		} finally {
				setLoading(false);
		}
	};

	const sortSearch = async ( criterion:ColumnName ) => {

		// switch (criterion) {
		// 	case 'Price': updateSortBy('')
		// 	case 'YdgLow': updateSortBy('YdgLow')
		// 	case 'YdgHigh': updateSortBy('YdgHigh')
		// }
		setLoading( true );
		await fetchData( criterion );
		console.log('sorting complete on ', criterion)

	}

	return {
		fetchData, fetchSchema,
		sortSearch,
		searchResults, setSearchResults, 
		schema, setSchema, 
		loading, setLoading, 
		error, setError,
		page, setPage,
	}
}