import { Link } from "preact-router"

export function Title(props) {
  return (
    <header className={'title'} style={head}>
      <Link href="/">
  			<h1 style={title}>Super Pattern List</h1>
      </Link>
      <nav style={nav}>
        <Link href="/about">
          <li style={link}>About</li>
        </Link>
        <Link href="/input">
          <li style={link}>Add Pattern</li>
        </Link>
        <li style={disabled}>Log In</li>
      </nav>
      
    </header>
  )
}

const flexRow = {
  display: 'flex',
  flexDirection: 'row', 
  flexWrap: 'wrap',
}

const nav = {
  ...flexRow,
  textAlign: 'center',
  listStyle: 'none',
  alignContent: 'center',
  justifyContent: 'space-between',
  minWidth: '140px',
}

const head = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  margin: '0',
  padding: '4rem 0',
  justifyContent: 'space-between'
}

const title = {
  textAlign: 'left',
  fontFamily: 'FitzgeraldBold',
  fontSize: '48px',
  margin: 0,
  color: 'var(--primary-text)',
}

const link = {
  color: '#000',
  margin: '0 1rem'
}

// TODO MOVE
const disabled = {
  ...link,
  color: '#bbb'
}