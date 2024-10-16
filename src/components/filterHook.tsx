import { useState } from "preact/hooks";

// Filter state and mutators
export function filterHook() {
	const [ filterBundle, setFilter ] = useState({});
	
	const addFilter = (key, value):void => {
		const new_filter_bundle = {...filterBundle, [key]: value};
		setFilter( new_filter_bundle );
	}
	
  // broken
	// const removeFilter = ( key, value ):void => {
	// 	const next_filters = filterBundle.filters.filter( f => !( key in f && f[key] == value ) );
  //   const new_filter_bundle = {
  //     filters: next_filters,
  //     sortBy: filterBundle.sortBy
  //   }
	// 	setFilter( new_filter_bundle );
	// }
  
  // unused and broken
  // const toggleFilter = ( key, value ):void => {
  //     flipFilter( key, value );
  // }
	
	// const flipFilter = (key, value):void => {
	// 	if (!filterBundle.filters.some(f => key in f && f[key] == value)) {
	// 		addFilter(key, value);
	// 	} else {
	// 		removeFilter(key, value);
	// 	}
	// }
  return { filterBundle, setFilter, addFilter }
}