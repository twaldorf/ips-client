import { Bullet } from "./ListBullet"
import { ListPatternInfo } from "./ListPatternInfo"
import { PatternTags } from "./PatternTags"

import placeholderImgUrl from '../assets/placeholder.png'

export function Pattern(props) {
	return (
		<div>
			<Bullet rank={props.data.id} />
			<div style={listPatternStyle}>
				<ListPatternInfo  
					name={props.data.pattern_name}
					author={props.data.pattern_designer}
					price={props.data.pattern_cost}
					format={props.data.pdf_or_print}
				/>
			</div>
			<PatternTags />
		</div>
	)
}

const listPatternStyle = {
	maxHeight: '240px',
	padding: '20px',
  margin: '0px',
	backgroundImage: `url(${placeholderImgUrl})`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	borderRadius: '1vw'
}