import axios from "axios";
import { useState } from "preact/hooks";
import { apiUrl } from "../config";
import { ColumnName } from "../types";

export function searchHook(path='patterns') {
	const [ searchResults, setSearchResults ] = useState([]);
	const [schema, setSchema] = useState([]);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const [ page, setPage ] = useState( 1 );

	const page_length = 25;

	// const fetchData = async ( searchBundle ) => {

	const fetchData = async ( query: string, sort_by?:ColumnName, page:number=1 ) => {

		// refactor this to use only the searchbundle and create the outgoing request piecemeal
		try {

			if (query.length > 0) {
				const response = await axios.get( `${apiUrl}/${path}/search?query=${encodeURIComponent(query)}` );
				setSearchResults( response.data );
			} else {
				const response = !sort_by ? 
				await axios.get( `${apiUrl}/${path}?page=${page}&?page_length=${page_length}` ) :
				await axios.get( `${apiUrl}/${path}SortBy=${sort_by}` );
				setSearchResults( response.data );
			}	
		} catch ( error ) {
				setError( error );
		} finally {
			console.log('done')
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

export function getSinglePatternHook(path='patterns') {
	const [ data, setData ] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = async ( id ) => {
		try {
				const response = await axios.get(`${apiUrl}/${path}/${id}`);
				setData(response.data);
		} catch (error) {
				setError(error);
		} finally {
				setLoading(false);
		}
	};

	return { fetchData, data, setData, loading, setLoading, error, setError }
}