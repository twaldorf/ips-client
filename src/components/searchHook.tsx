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

	const [ metadata, setMetadata ] = useState({});

	const encodeArgumentsIntoURL = (request: string, argument: string, value:string):string => {
		let r = request;
		if (request.includes('?')) {
			r += `&${argument}=${encodeURIComponent(value)}`
		} else {
			r += `?${argument}=${encodeURIComponent(value)}`
		}
		return r;
	}

	const fetchData = async ( searchBundle ) => {
		const { query, sort_by, page_number, filterBundle, limit } = searchBundle
		console.log('search bundle: ', searchBundle)

		// Build Request: Create a valid request stub
		let request = `${apiUrl}/${path}`;

		// Build Request: Append a search query if one exists in the bundle
		// TODO: Use encodeArgumentsIntoURL function instead of this ternary mess
		if (query && query.length > 0) request = query ? request + `/search?query=${encodeURIComponent(query)}` : request;

		// Build Request: iterate through the filter bundle and append filterkey=value onto the request
		if (filterBundle) {
			Object.keys(filterBundle).map(filterkey => {
				const criterion = filterBundle[filterkey];
				if (criterion) request = encodeArgumentsIntoURL(request, filterkey, criterion);
			})
		}

		if (page) request = encodeArgumentsIntoURL(request, 'page', page.toString());

		await fetchDataOld(request);
	}

	const fetchDataOld = async ( request:string ) => {
		console.log('attempting to query request: ', request);
		try {
				const response = await axios.get(request);
				console.log(response)
				setSearchResults( response.data.data );
				setMetadata( response.data.metadata );
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
		metadata
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