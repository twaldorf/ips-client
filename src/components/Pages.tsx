export const Pages = ( { page, setPage, count } ) => {

  const handlePrev = () => {
    if ( page > 1 ) {
      setPage( page - 1 );
    }
  }

  const handleNext = () => {
    setPage( page + 1 );
  }

  const setPageTo = (e) => {
    const n = parseInt(e.target.textContent);
    setPage(n);
  }

  const page_numbers = Array.from( Array( page ).keys() );

  return (
    <ul style={listStyle}>Page:
      { page_numbers.map( n => <li onClick={ setPageTo }>{n + 1}</li>) }
    </ul>
  )
};

const listStyle = {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
}
