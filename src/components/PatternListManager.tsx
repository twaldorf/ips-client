
import { useContext } from 'preact/hooks';
import { SearchContextType } from '../types';
import { PatternList } from './PatternList'; // Import the PatternList component
import { searchContext } from './SearchContext';

export function PatternListManager( { searchResults, filterBundle, setPage, page } ) {
	const categories = ["Garment", "Gear", "Decor"];
  const url = window.location.pathname.split('/')[2];

  const { searchBundle } = useContext<SearchContextType>(searchContext);

  const matchingCategory = categories.find((c) => url === c);
  
  if (matchingCategory) {
    console.log('category match')
    return <PatternList category={matchingCategory} 
      data={searchResults}
      filters={ [ ...filterBundle.filters, {category: matchingCategory} ] } 
      setPage={setPage}
      page={page}
      limit={0}/>
  }

  console.log('no category match')

	return (
		<>
			{categories.map((category) => (
				<PatternList key={category} category={category} 
        data={searchResults}
				filters={ [ ...filterBundle.filters, {category: category} ] } 
				setPage={setPage}
				page={page}
        limit={5}/>
			))}
		</>
	);
}