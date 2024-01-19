import { Bullet } from "./ListBullet"
import { ListPatternInfo } from "./ListPatternInfo"
import { PatternTags } from "./PatternTags"

import placeholderImgUrl from '../assets/placeholder.png'
import { Link } from "preact-router"

export function Pattern(props) {
	return (
		<Link href={`/detail/${props.data.Image}`} >
			<div>
				<Bullet rank={props.data.id} />
				<div style={ { backgroundImage: `url(${__S3_URL__}/${props.data.Image}.png)`, ...listPatternStyle } }>
					<ListPatternInfo  
						name={props.data.Name}
						author={props.data.Designer}
						price={props.data.Cost}
						format={props.data.Formats}
						/>
				</div>
				<PatternTags tags={ props.data.Categories } fabrics={ props.data.Fabrics }/>
			</div>
		</Link>
	)
}

const listPatternStyle = {
	color: 'white',
	backgroundColor: 'antiquewhite',
	fontStyle: 'none',
	maxHeight: '240px',
	padding: '20px',
  margin: '0px',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	borderRadius: '1vw',
}