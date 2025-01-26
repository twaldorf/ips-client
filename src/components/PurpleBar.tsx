import { Link } from "preact-router"

export const PurpleBar = () => {
  return (
    <div className={"hide-on-mobile"} style={ purple }>Looking for Flatland? Head to <a href="https://flatland.studio" style={link}>flatland.studio</a>.</div>
  )
}

const link = {
  fontWeight: 'bold',
  color: 'white',
}

const purple = {
  backgroundColor: 'var(--accent-text)',
  color: 'white',
  textAlign: 'center',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
}