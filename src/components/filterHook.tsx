import { useState } from "preact/hooks";

// Filter state and mutators
export function filterHook() {
	const [ filters, setFilter ] = useState([]);
	
	function addFilter(key, value) {
		const new_filters = [
			...filters, {[key]: value}
		]
		setFilter(new_filters);
	}
	
	function removeFilter(key, value) {
		const new_filters = filters.filter( f => !( key in f && f[key] == value ) );
		setFilter( new_filters );
	}
	
	const toggleFilter = (key, value) => {
		if (!filters.some(f => key in f && f[key] == value)) {
			addFilter(key, value);
		} else {
			removeFilter(key, value);
		}
	}
  return { filters, setFilter, toggleFilter, removeFilter, addFilter }
}