import { createContext } from "preact";
import { useState } from "preact/hooks";

export const searchContext = createContext({});

export const SearchProvider = ({ children, searchBundle, setSearchBundle }) => {
	return (
		<searchContext.Provider value={ { searchBundle, setSearchBundle } }>
			{children}
		</searchContext.Provider>
	);
};
