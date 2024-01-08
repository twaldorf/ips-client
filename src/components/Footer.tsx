export function Footer() {
  return (
    <footer style={footer}>
      <p>
        Indie Pattern List is a part of Design Pattern Systems made for my friends in the textile community.
      </p>
      <ul>
        <li><a href="">Link 1</a></li>
        <li><a href="">Link 1</a></li>
      </ul>
    </footer>
  )
}

const footer = {
  padding: '4rem 0',
  display: 'grid',
  gridTemplateColumns: 'minmax(20px, auto) 1fr 1fr',
  gap: '4rem',
}