import { useState } from "preact/hooks";
import { buttonRefine, buttonToggle } from "../styles/buttons";
import { FilterTag } from "./FilterTag";

export function Filter(props) {
	const filterArray = Object.keys(props.filter);
	const activeFilterArray = Object.keys(props.filters);

	const [visible, setVisible] = useState(false);
	
	const toggleVisibility = () => {
		setVisible((prevVisible) => !prevVisible);
	};

	return (
		<div style={filterContainer}>
			<div style={filterTopRow}>
				<button style={buttonToggle} onClick={toggleVisibility}>Filter</button>

				<ul style={activeFilters}>
					{activeFilterArray && 
						activeFilterArray.map((filter) => {
							return (
									<FilterTag value={filter + ': ' + props.filters[filter]} />
							)
					})}
				</ul>
				
				<button style={buttonRefine}>Sort By</button>
			</div>
			
			{visible && 
				<ul style={listStyle}>
					{filterArray.map((filter) => {
						return <FilterItem 
							data={{filter: filter, values: props.filter[filter]}} 
							state={props.filters} 
							removeFilter={props.removeFilter} 
							setState={props.setFilters}/>;
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
						state={props.state} 
						setState={props.setState}
						removeFilter={props.removeFilter}/>
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