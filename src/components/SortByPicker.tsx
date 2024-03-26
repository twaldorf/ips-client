import { buttonRefine, buttonToggle } from "../styles/buttons"

export const SortByPicker = ( { updateSortBy, visibility }) => {

  return (
    <ul style={ listStyle }>
			<li style={ sortOption } onClick={ () => { updateSortBy( "price" ) } } id="Price">Price (low to high)</li>
			<li style={ sortOption }  onClick={ () => { updateSortBy( "Ydg. 45\"" ) } } id="YdgLow">Ydg Required (low to high)</li>
			<li style={ sortOption }  onClick={ () => { updateSortBy( "YdgHigh" ) } } id="YdgHigh">Ydg Required (high to low)</li>
		</ul>
  )
}

const sortOption = {

}

const listStyle = {
	backgroundColor: 'white',
	border: '2px solid var(--accent-text)',
	borderRadius: '6px',
	listStyle: 'none',
	padding: '1rem 1.4rem',
	position: 'absolute',
	right: '0',
	top: '2rem',
}