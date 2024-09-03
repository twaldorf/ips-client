import { Link } from "preact-router"

export const PurpleBar = () => {
  return (
    <div className={"hide-on-mobile"} style={ purple }>SuperPatternList is in early development. You can <a href="https://forms.gle/PokdoBrryFGqokt19" target="new" style={link}>report a bug or suggest a feature here</a> and that would be awesome of you - trevor</div>
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