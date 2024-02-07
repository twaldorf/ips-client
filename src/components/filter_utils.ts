export function filterData(data, filters):boolean {
		const filtered_data = data.filter( ( element ) => {
			var status = true;

			filters.map( ( filterPair ) => {
				const key = Object.keys( filterPair )[ 0 ];
				const value = filterPair[ key ];

				// accrue results as a bool, all filters must be true to return a datum
				status = status && value == element[ key ];
			} )
			return status;
		} );
		return filtered_data;
	}