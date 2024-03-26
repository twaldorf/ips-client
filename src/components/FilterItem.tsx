import { FilterTag } from "./FilterTag"


export function FilterItem(props) {

  function handleSliderChange(event) {
    props.toggleFilter( props.data.filter, parseInt(event.target.value) );
  }

	return (
		<li style={ filterRow }>
			<label htmlFor="">{ props.data.filter }</label>
			<ul style={ subList }>
				{ props.data.values.map( ( value ) => {
          // if (value == "RANGE") {
          //   return (
          //   <div>
          //       <input
          //         type="range"
          //         id="slider"
          //         min="0"
          //         max="25"
          //         step="1"
          //         style={ sliderStyle }
          //         onChange={ handleSliderChange }
          //       />
          //     </div>
          //   )
          // } else {
            return <FilterTag value={ value } 
  						filter={ props.data.filter } 
  						toggleFilter={ props.toggleFilter }
             />
				} ) }
			</ul>
		</li>
	)
}

const sliderStyle = {
    width: '100%',
    height: '2px',
    background: '#ddd',
    borderRadius: '4px',
    appearance: 'none',
    outline: 'none',
    margin: '8px 0',
};

const filterRow = {
	display: 'flex', flexDirection: 'row',
	alignItems: 'center',
}

const subList = {
	listStyle: 'none',
	display: 'flex',
	flexDirection: 'row',
	margin: '.5rem 0',
  flexWrap: 'wrap',
}