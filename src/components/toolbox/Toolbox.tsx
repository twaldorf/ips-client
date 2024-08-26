import { useState, useEffect } from "preact/hooks";
import { Filter } from ".././Filter";
import { Footer } from ".././Footer";
import { PatternList } from ".././PatternList";
import { Title } from ".././Title";
import { apiUrl } from "../../config";

import { filterHook } from ".././filterHook";
import { searchHook } from ".././searchHook";
import { Lander } from ".././Lander";
import { ListPlaceholder } from ".././ListPlaceholder";
import { PurpleBar } from ".././PurpleBar";
import { PatternListManager } from ".././PatternListManager";
import { Pattern } from "../ListPattern";
import { PenList } from "./PenList";

interface MainProps {
	path: String;
}

export function Toolbox({ path }:MainProps) {

	// Set up search results and filters
	const { fetchData, fetchSchema, loading, error, schema, searchResults, sortSearch, page, setPage } = searchHook('pen');
	const { filterBundle, setFilter, toggleFilter } = filterHook();

	// Fetch initial pattern list
	useEffect(() => {
		fetchData();
		// fetchSchema();
	}, []); // The empty dependency array ensures that this effect runs only once, equivalent to componentDidMount in class components

	if (loading) {
			return (
				<div>
					<Title />
					<ListPlaceholder />
				</div>
			);
	}

	if (error) {
			return <div>Error: {error.message}</div>;
	}

	return (
		<div>
			<Title />
	    <PenList data={searchResults} filters={filterBundle} category="" page={0} setPage={setPage} limit={0} />
			<Footer />
		</div>
	);
}
