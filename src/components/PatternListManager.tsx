
import { useContext } from 'preact/hooks';
import { SearchContextType } from '../types';
import { PatternList } from './PatternList'; // Import the PatternList component
import { searchContext } from './SearchContext';

export function PatternListManager( { searchResults, setPage, page } ) {
  const { searchBundle } = useContext<SearchContextType>(searchContext);
  const category = searchBundle.filterBundle.category;
  console.log(category)

  return <PatternList key={category} category={category} 
          data={searchResults}
          filters={ searchBundle.filterBundle } 
          setPage={setPage}
          page={page}
          limit={50}/> 
}