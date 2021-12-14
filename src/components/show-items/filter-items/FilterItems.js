import React, {useState, useEffect} from 'react';
import styles from './FilterItems.module.css';

function FilterItems({ onFilterItems }) {
  const [searchValue, setSearchValue] = useState("");

  function searchChangeHandler(e) {
    setSearchValue(e.target.value);
  };

  function searchSubmitHandler(e) {
    e.preventDefault();
    onFilterItems({
      search: searchValue
    });
  };

  useEffect(() => {
      const timer = setTimeout(() => {
          onFilterItems({
              search: searchValue
          })
      }, 500)
      return () => {
          clearTimeout(timer);
      }
  }, [searchValue, onFilterItems]);
  
  return (
    <div>
      <form className={styles["search-form"]} onSubmit={searchSubmitHandler}>
          <input type="search" value={searchValue} onChange={searchChangeHandler}/>
          <button type="submit">Search</button>
      </form>
      <div>
          filter
      </div>
    </div>
  )
};

export default FilterItems;
