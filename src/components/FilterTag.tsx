import { useState } from 'preact/hooks'
import { bubbleTag } from '../styles/bubbles'
import x_url from '../assets/icons/x.svg'
import plus_url from '../assets/icons/add.svg'

export function FilterTag(props) {
  // set a flag for if the filter is active
  function toggle() {
    props.toggleFilter(props.filter, props.value);
  }
  return (
    <li style={ props.active ? activeTag : bubbleTag} onClick={toggle}>{props.value}
    { props.active && 
      <img src={x_url} alt="" className={"icon"} />
    }
    { !props.active && 
      <img src={plus_url} alt="" className={"icon"} />
    }
    </li>
  )
}

const activeTag = {
  ...bubbleTag,
  backgroundColor: 'var(--active-effect)',
}

const icon = {
  backgroundColor: 'white',
  fontWeight: 'bold',
  borderRadius: '50%',
  width: '1rem',
  height: '1rem',
}