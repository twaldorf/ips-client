import { useState, useEffect, useContext } from "preact/hooks";
import { createContext } from "preact";
import { Filter } from "./Filter";
import { Footer } from "./Footer";
import { PatternList } from "./PatternList";
import { Title } from "./Title";
import { apiUrl } from "../config";

import { filterHook } from "./filterHook";
import { searchHook } from "./searchHook";
import { Lander } from "./Lander";
import { ListPlaceholder } from "./ListPlaceholder";
import { PurpleBar } from "./PurpleBar";
import { PatternListManager } from "./PatternListManager";
import { categories, SearchBundle } from "../types";

interface MainProps {
	path: String;
}

export function Main({ path }:MainProps) {
	console.log('init Main')
	// Set up search results and filters
	const { fetchData, fetchSchema, loading, error, schema, searchResults, sortSearch, page, setPage } = searchHook();

	// Fetch initial pattern list
	useEffect(() => {
		fetchData({});
	}, []); 

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
			<PurpleBar />
				<Title />
				<Lander />
				{categories.map((category) => (
					<PatternList key={category} category={category} 
	        data={searchResults}
					filters={ { category: category } } 
					setPage={setPage}
					page={page}
	        limit={5}/>
				))}
			<Footer />
		</div>
	);
}
