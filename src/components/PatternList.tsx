import { Pattern } from "./ListPattern";
import { filterData } from "../utils/filter_utils";
import { Pages } from "./Pages";
import { Fragment } from "preact/jsx-runtime";
import { StubPattern } from "./StubPattern";

interface PatternListProps {
	data: any;
	category: string;
	filters: any;
	page: number;
	setPage: any;
	limit: number;
}

export function PatternList(props: PatternListProps) {

	const filters = props.filters;
	const data = props.data;

	var filtered_data;

	// Check if filters are active
	console.log(filters.length)
	if ( filters && filters.length > 0 ) {
		filtered_data = filterData( data, filters );
  } else {
		filtered_data = data;
	}

	if (props.limit > 0) {
		filtered_data = filtered_data.slice(0, props.limit);
	}
	
	return (
		<Fragment>
			<h2 style={h2Style}>{props.category} Patterns</h2>
			<section style={ listStyle }>
				{ filtered_data.map( ( element ) => <Pattern data={ element } /> ) }
				{ props.limit > 0 && <StubPattern category={ props.category }/>}
			</section> 
			<Pages setPage={ props.setPage } page={ props.page } />
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