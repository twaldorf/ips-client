import { useState } from "preact/hooks";
import { Fragment } from "preact/jsx-runtime";

export const SearchBar = () => {
  const [ tooltip, toggleToolTip ] = useState(false);
  const [ mousePos, setPos ] = useState({
    mouseX: '0px',
    mouseY: '0px'
  })

  const handleEnter = e => {
    if (!tooltip) {
      setPos({ mouseX: `${e.clientX - 50}px`, mouseY: `${e.clientY}px` });
    }
    toggleToolTip(true);
  }

  const handleLeave = e => {
    toggleToolTip(false);
  }

  const tooltipStyle = {
    position: 'absolute',
    left: mousePos.mouseX,
    top: '-50%',
    backgroundColor: 'var(--bg-inset)',
    color: 'var(--primary-text)',
    padding: '1rem',
    borderRadius: '6px',
  }

  return (
    <Fragment>
      { tooltip && 
        <span style={ tooltipStyle } >Search is currently disabled for testing</span> 
      }
      <input 
      className="searchbar"
      type="text"
      placeholder="Search names, categories, garment types, styles..." 
      disabled={true}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}></input>
    </Fragment>
  );
}
