import { Pattern } from "./ListPattern";

export function PatternList(props) {
	const activeFilterArray = Object.keys(props.filters)
	return (
		<section style={listStyle}>
			{props.data.map((element) => {
				if (activeFilterArray.length > 0) {
					if (activeFilterArray.filter((filterKey) => {
						return props.filters[filterKey] == element[filterKey]
					}).length == activeFilterArray.length) {
						return <Pattern data={element} />;
					}
				} else {
						return <Pattern data={element} />;
				}
			})}
		</section>
	)
}

const listStyle = {
	color: 'white',
}