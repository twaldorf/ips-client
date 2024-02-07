import { useState, useEffect } from "preact/hooks";
import { Filter } from "./Filter";
import { Footer } from "./Footer";
import { PatternList } from "./PatternList";
import { Title } from "./Title";
import { apiUrl } from "../config";

import { filterHook } from "./filterHook";
import { searchHook } from "./searchHook";

interface MainProps {
	path: String;
}

export function Main({ path }:MainProps) {

	// Set up search results and filters
	const { fetchData, fetchSchema, loading, error, schema, searchResults } = searchHook();
	const { filters, setFilter, toggleFilter } = filterHook();

	// Fetch initial pattern list
	useEffect(() => {
		fetchData();
		fetchSchema();
	}, []); // The empty dependency array ensures that this effect runs only once, equivalent to componentDidMount in class components

	if (loading) {
			return <div>Loading...</div>;
	}

	if (error) {
			return <div>Error: {error.message}</div>;
	}

	return (
		<div>
			<Title />
			<Filter 
				filterSchema={schema[0]} 
				filters={filters}
				toggleFilter={ toggleFilter }
			/>
			<PatternList
				data={searchResults}
				filters={filters} 
			/>
			<Footer />
		</div>
	);
}
