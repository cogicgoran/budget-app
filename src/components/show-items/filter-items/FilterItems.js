import React, {useState, useEffect, useContext} from 'react';
import styles from './FilterItems.module.css';

import FilterSearchInput from './filter-search-input/FilterSearchInput';
import FilterSort from './filter-sort/FilterSort';
import FilterPriceRange from './filter-price-range/FilterPriceRange';
import FilterDateRange from './filter-date-range/FilterDateRange';

import { defaultSort } from './FilterSortData';
import FilterItemsContext from 'context/filter-items-context';
import FilterRangeContext from 'context/filter-range-context';


function FilterItems() {
  const { onFilterItems, maxVal } = useContext(FilterItemsContext);
  const defaultPriceRange = {minValue:0, maxValue:maxVal, maxVal};

  const [searchValue, setSearchValue] = useState("");
  const [showSortingOptions, setShowSortingOptions] = useState(false);
  const [selectedSortValue, setSelectedSortValue] = useState(defaultSort);
  const [priceRange, setPriceRange] = useState(defaultPriceRange);


  function searchChangeHandler(event) {
    setSearchValue(event.target.value);
  };

  function toggleShowSortingOptionsHandler() {
    setShowSortingOptions(prevState => !prevState);
  };

  function sortValueChangeHandler(sortSet) {
    setSelectedSortValue(sortSet);
  };

  function priceRangeChangeHandler(newPriceRange) {
    setPriceRange(newPriceRange);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      onFilterItems({
        search: searchValue,
        sortFn: selectedSortValue.sortFn,
        priceRange: priceRange
      });
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [searchValue, onFilterItems, selectedSortValue, priceRange]);

  return (
    <div>
      <form className={styles["search-form"]}>
        <FilterSearchInput onSearchInputChange={searchChangeHandler}/>
        <div className={styles["search-form__filter-wrapper"]}>
          {!showSortingOptions && <div className={styles["search-form__open-container"]}><span className={styles["search-form__open"]} onClick={toggleShowSortingOptionsHandler}>Sort options</span></div>}
          {showSortingOptions && <div>
            <div className={styles["search-form__filters-container"]}>
              <FilterSort selectedSortValue={selectedSortValue} onSelectedSortValue={sortValueChangeHandler}/>
              <FilterRangeContext.Provider value={{onPriceRangeChange:priceRangeChangeHandler}}>
                <FilterPriceRange />
              </FilterRangeContext.Provider>
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
