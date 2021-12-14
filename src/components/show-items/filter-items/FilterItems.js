import React, {useState, useEffect} from 'react';
import styles from './FilterItems.module.css';
import { dataLabelSortSet } from './FilterSortData';


function FilterItems({ onFilterItems }) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedSortValue, setSelectedSortValue] = useState(dataLabelSortSet[0]);
  const [showDropdown, setShowDropdown] = useState(false);

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
        search: searchValue,
        sortFn: selectedSortValue.sortFn
      });
    }, 500);

    return () => {
      clearTimeout(timer);
    }
  }, [searchValue, onFilterItems, selectedSortValue]);

  function toggleShowDropdownHandler() {
    setShowDropdown(prevState => !prevState)
  }

  function sortByHandler(e) {
    const selectedLabel = e.target.textContent;
    const selectedData = e.target.getAttribute("data-sort-by");

    const itemExists = dataLabelSortSet.find(set => (set.label === selectedLabel && set.data === selectedData));

    if (!itemExists) return;

    setSelectedSortValue(itemExists);
  }
  
  return (
    <div>
      <form className={styles["search-form"]} onSubmit={searchSubmitHandler}>
        <div>
          <input type="search" value={searchValue} onChange={searchChangeHandler}/>
        </div>
        <div className={styles['search-form__filter-sort-current']}>
          <li><span data-sort-by={selectedSortValue.data} onClick={toggleShowDropdownHandler}>{selectedSortValue.label}</span></li>
        {showDropdown && <ul className={styles['search-form__filter-sort-dropdown']}>
          <li key="date-desc"><span data-sort-by="date-desc" onClick={sortByHandler}>Newer</span></li>
          <li key="date-asc"><span data-sort-by="date-asc" onClick={sortByHandler}>Older</span></li>
          <li key="name-desc"><span data-sort-by="name-desc" onClick={sortByHandler}>Name Descending</span></li>
          <li key="name-asc"><span data-sort-by="name-asc" onClick={sortByHandler}>Name Ascending</span></li>
          <li key="price-desc"><span data-sort-by="price-desc" onClick={sortByHandler}>Price Descending</span></li>
          <li key="price-asc"><span data-sort-by="price-asc" onClick={sortByHandler}>Price Ascending</span></li>
        </ul>}
        </div>
        <button type="submit">Search</button>
      </form>

    </div>
  )
};

export default FilterItems;
