export function filterData( data:Array<Object>, filters ) {
	const patterns = data;
	if (patterns) {
		const filtered_data = patterns.filter((pattern, pindex, patterns) => {
			let accum = true;
			Object.keys(filters).map((filterkey, filterindex, filterkeys) => {
				accum = accum && pattern[filterkey] == filters[filterkey];
			})
			return accum;
		})
		return filtered_data;
	} else {
		return null;
	}
}