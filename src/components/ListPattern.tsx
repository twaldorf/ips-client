import { Bullet } from "./ListBullet"
import { ListPatternInfo } from "./ListPatternInfo"
import { PatternTags } from "./PatternTags"
import { s3Url } from "../config"

import placeholderImgUrl from '../assets/placeholder.png'
import { Link } from "preact-router"
import { AddToList } from "./lists/AddToList"

export function Pattern(props) {
	
	const image = props.data.built_image_file ? props.data.built_image_file : props.data.image_name;

	return (
		<Link href={`/detail/${props.data._id}`} >
			<div>
				<div style={ image ? 
				{ backgroundImage: `url(${s3Url}/${image})`, ...listPatternStyle } :
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
					<AddToList patternId={props.data._id}></AddToList>
				</div>
				{/* <PatternTags tags={ props.data.categories } fabrics={ props.data.fabrics }/> */}
			</div>
		</Link>
	)
}

export const listPatternStyle = {
	color: 'white',
	backgroundColor: 'antiquewhite',
	fontStyle: 'none',
	height: '140px',
	padding: '20px',
  margin: '0px',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	borderRadius: '1vw',
	backgroundSize: 'cover',
	overflow: 'hidden',
	position: 'relative'
}