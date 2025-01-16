import { Pattern } from "./ListPattern";
import { filterData } from "../utils/filter_utils";
import { Pages } from "./Pages";
import { Fragment } from "preact/jsx-runtime";
import { StubPattern } from "./StubPattern";
import { useContext } from "preact/hooks";
import { SearchContextType } from "../types";
import { searchContext } from "./SearchContext";
import { ErrorText } from "./ui-utilities/Error";

interface PatternListProps {
	data: any;
	category: string;
	filters: any;
	page: number;
	setPage: Function;
	metadata: unknown;
	limit?: number;
	count?: number;
}

export function PatternList( { filters, data, metadata, limit, count, setPage, category, page }: PatternListProps) {
	if (!data) {
		return <ErrorText message={ "No pattern data found." }></ErrorText>
	}

	// Filter: Apply active filters
	var filtered_data:Array<unknown>;
	// if ( filters && Object.keys(filters).length > 0 ) {
	// 	filtered_data = filterData( data, filters );
  // } else {
		filtered_data = data;
	// }

	// Limited View: Present only some patterns
	if (limit > 0) {
		filtered_data = filtered_data.slice(0, limit);
	}

	const numpatterns = count || metadata.matching_patterns_count;

	console.log('lim', limit, data)

	return (
		<Fragment>
			<h2 style={h2Style}>{category} Patterns ({numpatterns})</h2>
			<section style={ listStyle }>
				{ filtered_data.map( ( element ) => <Pattern data={ element } /> ) }
				{ limit > 0 && limit <= 10 && <StubPattern category={ category }/>}
			</section>
			{ !limit && page && <Pages setPage={ setPage } page={ page } count={ numpatterns } /> }
		</Fragment>
	);
}

const listStyle = {
	color: 'white',
	marginTop: 0,
}

export const h2Style = {
	// fontFamily: 'FitzgeraldBold, serif',
	fontSize: '32px'
}