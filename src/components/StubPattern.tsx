import { Link } from "preact-router/match";
import { listPatternStyle } from "../components/ListPattern";

export function StubPattern({ category }) {
	return (
		<Link href={`category/${category}`}>
			<div style={stubStyle}>
				<h3>All {category} Patterns</h3>
			</div>
		</Link>
	);
}

export const stubStyle = {
	...listPatternStyle,
	backgroundColor: '#eee',
	color: '#777',
	maxHeight: '240px',
}