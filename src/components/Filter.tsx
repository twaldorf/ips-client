import { useState } from "preact/hooks";
import { buttonRefine, buttonToggle } from "../styles/buttons";
import { FilterTag } from "./FilterTag";
import { FilterPanel } from "./FilterPanel";
import { FilterRow } from "./FilterRow";
import { SortByPicker } from "./SortByPicker";

export function Filter(props) {
	const [visible, setVisible] = useState(false);

	const [ sortVisible, setSortVisible ] = useState(false);

	const { toggleFilter, filters, sortSearch } = props;
	
	const toggleVisibility = () => {
		setVisible((prevVisible) => !prevVisible);
	};

	const toggleSortVisibility = () => {
		setSortVisible((prevVisible) => !prevVisible);
	};

	return (
		<div style={ filterContainer }>
			<div style={ filterTopRow }>
				<button style={ buttonToggle } onClick={ toggleVisibility }> Filter </button>
				<button style={ buttonRefine } onClick={ toggleSortVisibility } id={"button-sort"}>Sort By</button>

				{
					sortVisible &&
					<SortByPicker updateSortBy={ sortSearch } visibility={ toggleSortVisibility }/>
				}
			</div>
			{ visible && 
				<FilterPanel filterSchema={ props.filterSchema } toggleFilter={ toggleFilter } />
			}
			<FilterRow filters={ filters } toggleFilter={ toggleFilter } />
		</div>
	)
}

const filterTopRow = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	margin: '0 0 20px 0',
	position: 'relative',
	flexWrap: 'true',
}

const filterContainer = {
	textAlign: 'left',
}
