import { effect } from "@preact/signals";
import { Pattern } from "./ListPattern";

export function PatternList(props) {

	const filters = props.filters;
	const data = props.data; 

	return (
		<section style={ listStyle }>

			{ data.map(( element ) => {
				console.log('rendering, ', element)

				if ( filters && filters.length > 0 ) {
					
					if ( filters.filter( ( filterObj ) => {

						const key = Object.keys(filterObj)[0];
						const value = filterObj[key];

						console.log( 'comparing ' + value, element[key] );

						return  value == element[key]

					}).length == filters.length ) {

						return <Pattern data={ element } />;
					}
				} else {
						return <Pattern data={ element } />;
				}
			})}

		</section> );
}

const listStyle = {
	color: 'white',
}