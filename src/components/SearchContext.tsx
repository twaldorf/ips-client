import { createContext } from "preact";
import { useState } from "preact/hooks";
import { SearchBundle, SearchContextType } from "../types";

// const init_bundle:SearchContextType = { searchBundle: { query: '', filterBundle: {}}, setSearchBundle: null };
export const searchContext = createContext(undefined);

export const SearchProvider = ({ children, searchBundle, setSearchBundle }) => {
	const provision = { searchBundle, setSearchBundle };
	return (
		<searchContext.Provider value={provision}>
			{children}
		</searchContext.Provider>
	);
};
