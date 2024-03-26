export function Footer() {
  return (
    <footer style={footer}>
      <p>
        Super Pattern List is a part of the Design Pattern Systems toolkit, a set of collaborative textile design tools made by me (trevor) for my friends.
      </p>
    </footer>
  )
}

const footer = {
  padding: '4rem 0',
  display: 'grid',
  gridTemplateColumns: 'minmax(20px, auto) 1fr 1fr',
  gap: '4rem',
}