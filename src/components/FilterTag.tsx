import { useState } from 'preact/hooks'
import { bubbleTag } from '../styles/bubbles'

export function FilterTag(props) {
  // set a flag for if the filter is active
  function toggle() {
    props.toggleFilter(props.filter, props.value);
  }
  return (
    <li style={bubbleTag} onClick={toggle}>{props.value}</li>
  )
}