import { useState } from 'preact/hooks'
import { bubbleTag } from '../styles/bubbles'

export function FilterTag(props) {
  // set a flag for if the filter is active
  const addTag = () => {
    // check if the filter is already applied
    if (props.state[props.filter] == props.value) {
      props.removeFilter(props.filter);
    }
      props.state[props.filter] = props.value
      props.setState({...props.state});
  }
  return (
    <li style={bubbleTag} onClick={addTag}>{props.value}</li>
  )
}