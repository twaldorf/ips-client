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
import { SearchProvider } from "./SearchContext";
import { SearchBundle } from "../types";


export function Search({ category }) {
	console.log(category)
	// Set up search results and filters
	const { fetchData, fetchSchema, loading, error, schema, searchResults, sortSearch, page, setPage } = searchHook();
	const { filterBundle, setFilter, toggleFilter } = filterHook();
	const [searchBundle, setSearchBundle] = useState<SearchBundle>( { query: '', filterBundle: {}  } );

	// Fetch initial pattern list
	useEffect(() => {
		fetchData( searchBundle );
		// fetchSchema();
	}, [ searchBundle ]); 

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
			<SearchProvider searchBundle={searchBundle} setSearchBundle={setSearchBundle}>
				<Title />
				<Filter 
					filterSchema={schema[0]}
					filters={filterBundle}
					toggleFilter={toggleFilter}
					sortSearch={sortSearch}
					fetchData={fetchData}
				/>
				<PatternListManager 
					searchResults={searchResults}
					filterBundle={filterBundle}
					setPage={setPage}
					page={page}
				/>
			</SearchProvider>
			<Footer />
		</div>
	);
}
