import { Pattern } from "./ListPattern";
import { filterData } from "./filter_utils";

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
		<section style={ listStyle }>
			{ filtered_data.map( ( element ) => <Pattern data={ element } /> ) }
		</section> );
}

const listStyle = {
	color: 'white',
}