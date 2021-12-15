import React, {useState, useEffect} from 'react';
import styles from './FilterItems.module.css';

import FilterSearchInput from './filter-search-input/FilterSearchInput';
import FilterSort from './filter-sort/FilterSort';
import FilterPriceRange from './filter-price-range/FilterPriceRange';
import FilterDateRange from './filter-date-range/FilterDateRange';

import { defaultSort } from './FilterSortData';

function FilterItems({ onFilterItems }) {
  const [searchValue, setSearchValue] = useState("");
  const [showSortingOptions, setShowSortingOptions] = useState(false);
  const [selectedSortValue, setSelectedSortValue] = useState(defaultSort);

  console.log("filteritems RUNNING");

  function searchChangeHandler(e) {
    console.log("called");
    setSearchValue(e.target.value);
  };

  function toggleShowSortingOptionsHandler() {
    setShowSortingOptions(prevState => !prevState);
  };

  function sortValueChangeHandler(sortSet) {
    setSelectedSortValue(sortSet);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("effect executed");
      onFilterItems({
        search: searchValue,
        sortFn: selectedSortValue.sortFn
      });
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [searchValue, onFilterItems, selectedSortValue]);

  return (
    <div>
      <form className={styles["search-form"]}>
        <FilterSearchInput onSearchInputChange={searchChangeHandler}/>
        <div className={styles["search-form__filter-wrapper"]}>
          {!showSortingOptions && <div className={styles["search-form__open-container"]}><span className={styles["search-form__open"]} onClick={toggleShowSortingOptionsHandler}>Sort options</span></div>}
          {showSortingOptions && <div>
            <div className={styles["search-form__filters-container"]}>
              <FilterSort onCloseSortingOptions={toggleShowSortingOptionsHandler} selectedSortValue={selectedSortValue} onSelectedSortValue={sortValueChangeHandler}/>
              <FilterPriceRange />
              <FilterDateRange />
            </div>
            <button className={styles["search-form__close"]} type='button' onClick={toggleShowSortingOptionsHandler}>Close</button>
          </div>}
        </div>
      </form>

    </div>
  )
};

export default FilterItems;
