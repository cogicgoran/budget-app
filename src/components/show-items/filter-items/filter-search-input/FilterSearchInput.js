import React from 'react';
import styles from './FilterSearchInput.module.css';

function FilterSearchInput({searchValue, onSearchInputChange}) {
  return (
    <div>
      <input className={styles['filter__search-input']} type="search" placeholder="Search..." value={searchValue} onChange={onSearchInputChange}/>
    </div>
  )
};

export default FilterSearchInput;
