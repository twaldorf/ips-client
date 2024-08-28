import { useContext, useState } from "preact/hooks";
import { Fragment } from "preact/jsx-runtime";
import { searchContext, SearchContextType } from "../SearchContext";
import { buttonRefine } from "../../styles/buttons";
import { FilterRow } from "../FilterRow";

export const SearchBar = ( ) => {

  const { searchBundle, setSearchBundle } = useContext<SearchContextType>(searchContext);

  var local_query = '';

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchBundle({ ...searchBundle, query: local_query });
  }

  const preFetch = (e) => {
    setTimeout(() => {
      handleSearch(e);
    }, 100 * 2);
  }

  const updateFormData = (e) => {
    local_query = e.target.value;
  }

  return (
    <Fragment>
      <form onSubmit={handleSearch} style={formStyle}>
        <input
              type="text"
              value={searchBundle.query}
              onInput={updateFormData}
              placeholder="Search for pattern styles, uses, fabrics, etc."
              style={ searchStyle }
          />
        <button type="submit" style={searchButton}>Search</button>
      </form>
    </Fragment>
  );
}

const searchButton = {
  ...buttonRefine,
  backgroundColor: 'var(--accent-text)',
  color: 'white',
  border:'none',
}

const formStyle = {
  display: 'flex',
  direction: 'row',
  width: '70%',
}

const searchStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '.2rem',
  border: '1px solid #ccc',
  fontSize: '1.2em',
  margin: '0 10px 0 0',
  verticalAlign: 'top',
  boxSizing: 'border-box',
}