import { Link } from "preact-router"

export function Title(props) {
  return (
    <div style={title} className={'title'}>
      <Link href="/">
  			<h1>Super Pattern List</h1>
      </Link>
      <p>Thousands of patterns for sewing garments, gear, decor, and plushies.</p>
      <p>Instantly searchable and easily filterable with whatever weird tags you want.</p>
    </div>
  )
}

const title = {
  textAlign: 'left',
  fontFamily: '',
  margin: '4rem 0',
  color: 'var(--primary-text)',
}