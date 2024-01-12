import { Bullet } from "./ListBullet"
import { ListPatternInfo } from "./ListPatternInfo"
import { PatternTags } from "./PatternTags"

import placeholderImgUrl from '../assets/placeholder.png'
import { Link } from "preact-router"

export function Pattern(props) {
	return (
		<Link href={`/detail/${props.data.id}`} >
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
		</Link>
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