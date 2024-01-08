import { Pattern } from "./ListPattern";

export function PatternList(props) {
	return (
		<section style={listStyle}>
			{props.data.map((element) => {
				return <Pattern data={element} />;
			})}
		</section>
	)
}

const listStyle = {
	color: 'white',
}