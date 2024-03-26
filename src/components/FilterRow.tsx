import { Fragment } from "preact/jsx-runtime";
import { FilterTag } from "./FilterTag";

export function FilterRow({ filters, toggleFilter}) {
  return (
    <Fragment>
      <ul style={ activeFilters }>
      { filters.length > 0 && <label>Filters: </label> }
    	{ filters && 
    		filters.map((filter) => {
          
          const filterKey = Object.keys(filter)[0];
    			const value = filter[filterKey];
          
    			return ( <FilterTag 
            filter={ filterKey }
            value={ value }
            toggleFilter={ toggleFilter }
            active={ true }
            /> )
          })}
      </ul>
    </Fragment>
  )
}

const activeFilters = {
	listStyle: 'none',
	flexDirection: 'row',
	display: 'flex',
	maxWidth: '80%',
	flexWrap: 'wrap',
  margin: '0',
}
