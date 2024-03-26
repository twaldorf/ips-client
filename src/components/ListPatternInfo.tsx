export function ListPatternInfo(props) {
  // const ydg = props.ydg60[0] && props.ydg60[1] ? props.ydg60 : props.ydg45;
  // const format = null;
	return (
		<div style={container} className="listItemInfo">
			<h4>{props.author}</h4>
			<h3>{props.name}</h3>
			<div>
				<ul style={listItemStyle}>
					<li>
            <div style={subitem}>
              <li>{props.format}</li>
              <li>{props.price}</li>
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

const subitem = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
}

const container = {
  display: 'flex',
  flexDirection: 'column',
  textShadow: 'black 1px 2px 4px',
}

const listItemStyle = {
  fontWeight: 'bold',
  fontSize: '1.2rem',

	margin: '0px',
	padding: '10px 0 0 0',
  display: 'flex',
  flexDirection: 'horizontal',
  justifyContent: 'space-between',
  listStyle: 'none',
  alignItems: 'end',
}