import { patterns_per_page } from "./constants";

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

  const page_numbers = Array.from( Array( Math.round(count / patterns_per_page) + 1 ).keys() );

  return (
    <ul style={listStyle}>Page:
      { page_numbers.map( n => <a href="" onClick={(e) => e.preventDefault()}><li style={n + 1 == page ? activePageNum : pageNum } onClick={ setPageTo }> {n + 1} </li></a>) }
    </ul>
  )
};

const listStyle = {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}

const pageNum = {
  padding: '1rem',
  margin: '0 .4rem',
  border: '1px solid #ddd',
  borderRadius: '8px',
  color: 'var(--primary-text)'
}

const activePageNum = {
  ...pageNum,
  color: 'white',
  border: 'none',
  backgroundColor: 'var(--active-effect)',
}