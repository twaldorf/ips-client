export function filterData( data:Array<Object>, filters ) {
	const patterns = data;
	const filtered_data = patterns.filter((pattern, pindex, patterns) => {
		let accum = true;
		Object.keys(filters).map((filterkey, filterindex, filterkeys) => {
			accum = accum && pattern[filterkey] == filters[filterkey];
		})
		return accum;
	})
	return filtered_data;
		// const filtered_data = data.filter( ( element ) => {
		// 	var status = true;

		// 	// test the attribute corresponding to each active filter
		// 	filters.map( ( filter_pair ) => {
		// 		const key = Object.keys( filter_pair )[ 0 ];
		// 		const filter_value = filter_pair[ key ];

		// 		var test_result = filter_value == element[ key ];

		// 		console.log('comparing', filter_value, element[ key ], test_result)

		// 		// handle array case
		// 		if ( element[ key ] instanceof Array ) {
		// 			test_result = element[ key ].some( item_value => item_value == filter_value );
		// 		}

		// 		// handle range case
		// 		// TODO: match this to the schema based on a range tuple
		// 		if ( key == "price" ) {
		// 			const cost = element[ key ];
		// 			const max = filter_value;
					
		// 			test_result = cost <= max;
		// 		}

		// 		// Sum the results as a boolean. Hence all filters must be true to return a datum.
		// 		status = status && test_result;
		// 	} )
		// 	return status;
		// } );
		// return filtered_data;
}