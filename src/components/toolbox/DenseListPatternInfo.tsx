export function DenseListPatternInfo(props) {
  // const ydg = props.ydg60[0] && props.ydg60[1] ? props.ydg60 : props.ydg45;
  // const format = null;
	return (
		<div style={container} className="DensePatternInfo">
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
  backgroundColor: 'black',
  lineHeight: '.8rem',
  fontSize: '.8rem',
  position: 'absolute',
  bottom: '0',
  width: '100%',
  margin: '0',
  borderRadius: '0 0 1vw 1vw',
  padding: '.2rem'
}

const listItemStyle = {
  fontWeight: 'bold',
  fontSize: '.6rem',

	margin: '0px',
  display: 'flex',
  flexDirection: 'horizontal',
  justifyContent: 'space-between',
  listStyle: 'none',
  alignItems: 'end',
}