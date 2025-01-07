import { accent, borderRadius } from "../components/ui-utilities/globalParameters"

export const buttonToggle = {
	fontSize: '1.2rem',
	padding: ' .4rem 1.2rem',
	backgroundColor: '#343434',
	border: 'none',
	borderRadius: '4px',
	color: 'white',
}

export const buttonActionWrapper = {
	background: 'linear-gradient(180deg, #8000FF, #5B00B5)',
	borderRadius,
	padding: '.3rem .3rem .5rem .3rem',
	display: 'inline-block',
	maxWidth: '200px',
	margin: 'auto',
	right: '0',
}

export const buttonAction = {
	background: 'linear-gradient(180deg, rgb(238, 222, 255), rgba(255, 255, 255, 1))',
	border: '2px solid white',
	// fontSize: '1.2rem',
	padding: ' .4rem 1.4rem',
	color: accent,
	fontWeight: 'bold',
	borderRadius: '4px',
}

export const buttonToggleDisabled = {
	...buttonToggle,
	backgroundColor: '#ddd',
}

export const buttonRefine = {
	...buttonToggle,
	backgroundColor: '#fff',
	color: '#494949',
	border: '2px solid #494949',
}