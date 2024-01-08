import { bubbleTag } from "../styles/bubbles"

export function PatternTags(props) {
	return (
		<ul style={tagList}>
			<li style={bubbleTag}>tag 1 TODO:</li>
		</ul>
	)
}

const tagList = {
	listStyle: 'none',
	display: 'flex',
	flexDirection: 'row',
	padding: '0',
}

const tag = {
	backgroundColor: 'peachpuff',
	borderRadius: '10px',
}