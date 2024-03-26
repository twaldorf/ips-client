import { Fragment } from "preact"
import { FilterItem } from "./FilterItem"

export function FilterPanel({ filterSchema, toggleFilter }) {

	return (
		<Fragment>
			<ul style={ listStyle }>
				{ Object.keys( filterSchema ).map(( filterKey ) => {
					return <FilterItem 
						data={{filter: filterKey, values: filterSchema[filterKey]}}  
						toggleFilter={ toggleFilter }
					/>
				})}
			</ul>
		</Fragment>
	)
}

const listStyle = {
	listStyle: 'none',
	display: 'flex',
	flexDirection: 'column',
	textAlign: 'left',
	padding: '0',
	flexWrap: 'wrap',
}