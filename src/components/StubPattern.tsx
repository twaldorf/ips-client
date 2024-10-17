import { Link } from "preact-router/match";
import { listPatternStyle } from "../components/ListPattern";
import { useContext } from "preact/hooks";
import { SearchContextType } from "../types";
import { searchContext } from "./SearchContext";


export function StubPattern({ category }) {
	// const { searchBundle, setSearchBundle } = useContext(searchContext);
	
  // const { searchBundle } = useContext<SearchContextType>(searchContext);
	console.log(useContext(searchContext))
	const setCategory = (e) => {
		// const bundle = searchBundle;
		// console.log(bundle)
		// bundle.filterBundle.category = category;
		// setSearchBundle( bundle )
	}
	
	
	return (
		<Link href={`/category/${category}`}>
			<div style={stubStyle} className="link" onClick={setCategory} role="link" aria-label={`Link to all patterns of category: ${category}`}>
				<h3>All {category} Patterns</h3>
			</div>
		</Link>
	);
}

export const stubStyle = {
	...listPatternStyle,
	backgroundColor: '#eee',
	color: '#777',
	maxHeight: '240px',
	cursor: "pointer"
}