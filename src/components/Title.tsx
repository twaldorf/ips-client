import { Link } from "preact-router"

export function Title(props) {
  return (
    <header className={'title'} style={head}>
      <Link href="/">
  			<h1 style={title}>Super Pattern List</h1>
      </Link>
      <nav style={nav} className="flex-row-to-col">
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
  textAlign: 'center',
  listStyle: 'none',
  alignContent: 'center',
  justifyContent: 'space-between',
  minWidth: '140px',
  alignItems: 'center',
}

const head = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  // margin: '0',
  padding: '3rem 0',
  justifyContent: 'space-between'
}

const title = {
  textAlign: 'left',
  fontFamily: 'FitzgeraldBold',
  fontSize: '48px',
  // margin: 0,
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