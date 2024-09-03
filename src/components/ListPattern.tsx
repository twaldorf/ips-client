import { Bullet } from "./ListBullet"
import { ListPatternInfo } from "./ListPatternInfo"
import { PatternTags } from "./PatternTags"
import { s3Url } from "../config"

import placeholderImgUrl from '../assets/placeholder.png'
import { Link } from "preact-router"

export function Pattern(props) {
	return (
		<Link href={`/detail/${props.data._id}`} >
			<div>
				<Bullet rank={props.data.id} />
				<div style={ props.data.imageUrl ? 
				{ backgroundImage: `url(${s3Url}/${props.data.built_image_file})`, ...listPatternStyle } :
				{ backgroundImage: `url(${s3Url}/dps_placeholder.png`, ...listPatternStyle }
			 }>
					<ListPatternInfo  
					// TODO: do not mutate this data
						name={props.data.title}
						author={props.data.designer}
						price={props.data.price}
						format={props.data.Formats}
						ydg60={props.data['Ydg, 54"+']}
						ydg45={props.data['Ydg, 45"']}
						/>
				</div>
				<PatternTags tags={ props.data.categories } fabrics={ props.data.fabrics }/>
			</div>
		</Link>
	)
}

export const listPatternStyle = {
	color: 'white',
	backgroundColor: 'antiquewhite',
	fontStyle: 'none',
	maxHeight: '240px',
	padding: '20px',
  margin: '0px',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'top',
	borderRadius: '1vw',
	backgroundSize: 'cover',
}