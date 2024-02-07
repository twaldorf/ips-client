import axios from "axios";
import { useState } from "preact/hooks";
import { apiUrl } from "../config";

export function searchHook() {
	const [ searchResults, setSearchResults ] = useState([]);
	const [schema, setSchema] = useState([]);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		try {
				const response = await axios.get(`${apiUrl}/patterns`);
				setSearchResults(response.data);
		} catch (error) {
				setError(error);
		} finally {
				// setLoading(false);
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

	return {
		fetchData, fetchSchema,
		searchResults, setSearchResults, 
		schema, setSchema, 
		loading, setLoading, 
		error, setError
	}
}