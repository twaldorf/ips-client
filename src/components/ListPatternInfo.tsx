export function ListPatternInfo(props) {
  // const ydg = props.ydg60[0] && props.ydg60[1] ? props.ydg60 : props.ydg45;
  // const format = null;
	return (
		<div style={container} className="listItemInfo">
			<h4>{props.author}</h4>
			<h3>{props.name}</h3>
			<div style={hiddenOverflow}>
				<ul style={listItemStyle}>
					<li>
            <div style={subitem}>
              <li>{props.format}</li>
              {/* TODO: support for denomination switch */}
              { props.price && <li>${props.price}</li> }
            </div>
          </li>
					<li>
            {/* { ydg && `${ydg[0]} - ${ydg[1]}` } yards */}
          </li>
				</ul>
			</div>
		</div>
	)
}

export const hiddenOverflow = {
  overflow: 'hidden'
}

const subitem = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  overflow: 'hidden'
}

const container = {
  display: 'flex',
  flexDirection: 'column',
  textShadow: 'black 1px 2px 4px',
}

const listItemStyle = {
  fontWeight: 'bold',
  fontSize: '1.2rem',
  overflow: 'hidden',
	margin: '0px',
	padding: '10px 0 0 0',
  display: 'flex',
  flexDirection: 'horizontal',
  justifyContent: 'space-between',
  listStyle: 'none',
  alignItems: 'end',
}