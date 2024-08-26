
import { PatternList } from './PatternList'; // Import the PatternList component

export function PatternListManager( { searchResults, filterBundle, setPage, page } ) {
	const categories = ["Garment", "Gear", "Decor"];
  const url = window.location.pathname.split('/')[2];

  const matchingCategory = categories.find((c) => url === c);
  
  if (matchingCategory) {
    return <PatternList category={matchingCategory} 
      data={searchResults}
      filters={ [ ...filterBundle.filters, {category: [matchingCategory]} ] } 
      setPage={setPage}
      page={page}
      limit={0}/>
  }

	return (
		<>
			{categories.map((category) => (
				<PatternList key={category} category={category} 
        data={searchResults}
				filters={ [ ...filterBundle.filters, {category: [category]} ] } 
				setPage={setPage}
				page={page}
        limit={5}/>
			))}
		</>
	);
}