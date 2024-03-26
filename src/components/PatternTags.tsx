import { bubbleTag } from "../styles/bubbles"

export function PatternTags( { tags, fabrics } ) {
	if (tags) {
		return (
			<ul style={tagList}>
				{
					tags.map(( tag ) => {
						return <li style={ bubbleTag }>{ tag }</li>
					})
				}
				{
					fabrics.map( fabric => <li style={bubbleTag }>{ fabric }</li>)
				}
			</ul>
		)

	} else {
		return (
			<ul style={tagList}></ul>
		)
	}
}

const tagList = {
	listStyle: 'none',
	display: 'flex',
	flexDirection: 'row',
	padding: '0',
	flexWrap: 'wrap',
}

const tag = {
	backgroundColor: 'peachpuff',
	borderRadius: '10px',
}