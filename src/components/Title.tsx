import { Link } from "preact-router"

export function Title(props) {
  return (
    <div style={title}>
      <Link href="/">
  			<h1>Indie Pattern List</h1>
      </Link>
    </div>
  )
}

const title = {
  textAlign: 'left',
  fontFamily: '',
  margin: '4rem 0',
}