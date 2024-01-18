import { bubbleTag } from "../styles/bubbles"

export function PatternTags( { tags, fabrics } ) {
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