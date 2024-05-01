import { useState } from "preact/hooks";
import { buttonRefine, buttonToggle, buttonToggleDisabled } from "../styles/buttons";
import { FilterTag } from "./FilterTag";
import { FilterPanel } from "./FilterPanel";
import { FilterRow } from "./FilterRow";
import { SortByPicker } from "./SortByPicker";
import { SearchBar } from "./filter/SearchBar";

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
			<div style={ filterTopRow } className="flex-row-to-col">
				<button disabled={true} style={ buttonToggleDisabled } onClick={ toggleVisibility }> Filter </button>
				<SearchBar/>
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
	justifyContent: 'space-between',
	margin: '0 0 20px 0',
	position: 'relative',
	flexWrap: 'true',
}

const filterContainer = {
	textAlign: 'left',
}
