import { FilterTag } from "./FilterTag"

export function FilterItem(props) {
	return (
		<li style={filterRow}>
			<label htmlFor="">{props.data.filter}</label>
			<ul style={subList}>
				{props.data.values.map((value) => {
					return <FilterTag value={value} 
						filter={props.data.filter} 
						toggleFilter={props.toggleFilter}
					/>
				})}
			</ul>
		</li>
	)
}

const filterRow = {
	display: 'flex', flexDirection: 'row',
	alignItems: 'center',
}

const subList = {
	listStyle: 'none',
	display: 'flex',
	flexDirection: 'row',
	margin: '.5rem 0',
}