import { useState } from "preact/hooks";
import { buttonRefine, buttonToggle } from "../styles/buttons";
import { FilterTag } from "./FilterTag";
import { FilterPanel } from "./FilterPanel";
import { FilterRow } from "./FilterRow";

export function Filter(props) {
	const [visible, setVisible] = useState(false);

	const { toggleFilter, filters } = props;
	
	const toggleVisibility = () => {
		setVisible((prevVisible) => !prevVisible);
	};

	return (
		<div style={ filterContainer }>
			<div style={ filterTopRow }>
				<button style={ buttonToggle } onClick={ toggleVisibility }> Filter </button>

				<FilterRow filters={ filters } toggleFilter={ toggleFilter } />
				<button style={ buttonRefine }>Sort By</button>
			</div>
			{ visible && 
				<FilterPanel filterSchema={ props.filterSchema } toggleFilter={ toggleFilter } />
			}
		</div>
	)
}

const filterTopRow = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	margin: '0 0 20px 0'
}

const filterContainer = {
	textAlign: 'left',
}
