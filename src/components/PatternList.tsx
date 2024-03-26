import { Pattern } from "./ListPattern";
import { filterData } from "../utils/filter_utils";
import { Pages } from "./Pages";
import { Fragment } from "preact/jsx-runtime";

export function PatternList(props) {

	const filters = props.filters;
	const data = props.data;

	var filtered_data;

	// Check if filters are active
	if ( filters && filters.length > 0 ) {
		filtered_data = filterData( data, filters );
  } else {
		filtered_data = data;
	}


	return (
		<Fragment>
			<h2 style={h2Style}>All Patterns</h2>
			<section style={ listStyle }>
				{ filtered_data.map( ( element ) => <Pattern data={ element } /> ) }
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
	fontFamily: 'FitzgeraldBold, serif',
	fontSize: '32px'
}