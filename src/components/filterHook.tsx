import { useState } from "preact/hooks";

// Filter state and mutators
export function filterHook() {
	const [ filterBundle, setFilter ] = useState({
    filters: [],
    sortBy: ""
  });
	
	const addFilter = (key, value):void => {
		const new_filter_bundle = {
      filters: [...filterBundle.filters, {[key]: value}],
      sortBy: filterBundle.sortBy
    };
		setFilter( new_filter_bundle );
	}
	
	const removeFilter = ( key, value ):void => {
		const next_filters = filterBundle.filters.filter( f => !( key in f && f[key] == value ) );
    const new_filter_bundle = {
      filters: next_filters,
      sortBy: filterBundle.sortBy
    }
		setFilter( new_filter_bundle );
	}
  
  // This is actually an UPDATE function, given its support for "Cost" functionality.
  // Refactoring includes replacing all `toggleFilter` propogation with `updateFilter`.
  const toggleFilter = ( key, value ):void => {
      flipFilter( key, value );
  }
	
	const flipFilter = (key, value):void => {
		if (!filterBundle.filters.some(f => key in f && f[key] == value)) {
			addFilter(key, value);
		} else {
			removeFilter(key, value);
		}
	}
  return { filterBundle, setFilter, toggleFilter, removeFilter, addFilter }
}