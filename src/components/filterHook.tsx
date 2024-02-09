import { useState } from "preact/hooks";

// Filter state and mutators
export function filterHook() {
	const [ filters, setFilter ] = useState([]);
	
	const addFilter = (key, value):void => {
		const new_filters = [
			...filters, {[key]: value}
		]
		setFilter( new_filters );
	}
	
	const removeFilter = ( key, value ):void => {
		const next_filters = filters.filter( f => !( key in f && f[key] == value ) );
		setFilter( next_filters );
	}
  
  // This is actually an UPDATE function, given its support for "Cost" functionality.
  // Refactoring includes replacing all `toggleFilter` propogation with `updateFilter`.
  const toggleFilter = ( key, value ):void => {
      flipFilter( key, value );
  }
	
	const flipFilter = (key, value):void => {
		if (!filters.some(f => key in f && f[key] == value)) {
			addFilter(key, value);
		} else {
			removeFilter(key, value);
		}
	}
  return { filters, setFilter, toggleFilter, removeFilter, addFilter }
}