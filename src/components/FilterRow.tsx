import { FilterTag } from "./FilterTag";

export function FilterRow({ filters, toggleFilter}) {
  return (
    <ul style={ activeFilters }>
  	{ filters && 
  		filters.map((filter) => {
        
        const filterKey = Object.keys(filter)[0];
  			const value = filter[filterKey];
        
  			return ( <FilterTag 
          filter={ filterKey }
          value={ value }
          toggleFilter={ toggleFilter }
          /> )
        })}
    </ul>
  )
}

const activeFilters = {
	listStyle: 'none',
	flexDirection: 'row',
	display: 'flex',
	maxWidth: '80%',
	flexWrap: 'wrap',
}
