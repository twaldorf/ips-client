import { useState } from "preact/hooks";
import { buttonRefine, buttonToggle } from "../styles/buttons";
import { FilterTag } from "./FilterTag";

export function Filter(props) {
	const [visible, setVisible] = useState(false);

	const { toggleFilter } = props;
	
	const toggleVisibility = () => {
		setVisible((prevVisible) => !prevVisible);
	};

	return (
		<div style={ filterContainer }>
			<div style={ filterTopRow }>
				<button style={ buttonToggle } onClick={ toggleVisibility }> Filter </button>

				<ul style={ activeFilters }>

					{ props.filters && 
						props.filters.map((filter) => {

							const value = Object.keys(filter)[0];

							return ( <FilterTag 
										value={ filter[value] }
										toggleFilter={ toggleFilter }
						 	/> )
					})}

				</ul>
				
				<button style={ buttonRefine }>Sort By</button>
			</div>
			
			{ visible && 
				<ul style={ listStyle }>
					{ Object.keys( props.filterSchema ).map(( filterKey ) => {
						return <FilterItem 
							data={{filter: filterKey, values: props.filterSchema[filterKey]}}  
							toggleFilter={ toggleFilter }
						/>
					})}
				</ul>
			}
		</div>
	)
}

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

const filterTopRow = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	margin: '0 0 20px 0'
}

const activeFilters = {
	listStyle: 'none',
	flexDirection: 'row',
	display: 'flex',
	maxWidth: '80%',
	flexWrap: 'wrap',
}

const filterContainer = {
	textAlign: 'left',
}

const listStyle = {
	listStyle: 'none',
	display: 'flex',
	flexDirection: 'column',
	textAlign: 'left',
	padding: '0',
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