import React from 'react';
import './search-box.styles.scss';

const SearchBox = (props) => {
  return (
    <div>
      <input
        className='search'
        type='search'
        placeholder='search monster'
        onChange={(e) => props.onSearchBoxChange(e)}
      />
    </div>
  );
};

export default SearchBox;
