import React, {useState, useEffect, useContext} from 'react';
import styles from './FilterItems.module.css';

import FilterSearchInput from './filter-search-input/FilterSearchInput';
import FilterSort from './filter-sort/FilterSort';
import FilterPriceRange from './filter-price-range/FilterPriceRange';
import FilterDate from './filter-date/FilterDate';

import { defaultSort } from './FilterSortData';
import FilterItemsContext from 'context/filter-items-context';
import FilterRangeContext from 'context/filter-range-context';


function FilterItems() {
  const { onFilterItems, maxVal, dateMaxMin } = useContext(FilterItemsContext);
  const defaultPriceRange = {minValue:0, maxValue:maxVal, maxVal};
  const defaultExactDate = {date:"", month:"", year:""};
  const defaultDateRange = {lowerLimitDate: dateMaxMin.minDate, upperLimitDate:dateMaxMin.maxDate};

  const [searchValue, setSearchValue] = useState("");
  const [showSortingOptions, setShowSortingOptions] = useState(false);
  const [selectedSortValue, setSelectedSortValue] = useState(defaultSort);
  const [priceRange, setPriceRange] = useState(defaultPriceRange);
  const [exactDate, setExactDate] = useState(defaultExactDate);
  const [dateRange, setDateRange] = useState(defaultDateRange);

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
    newPriceRange.maxVal = maxVal;
    setPriceRange(newPriceRange);
  };

  function exactDateChangeHandler(newExactDate) {
    const { date, month, year} = newExactDate;
      if ( date !== "" ) {
        setExactDate({
          ...defaultExactDate,
          date
        })
        setDateRange(defaultDateRange);
        return;
      }

      if ( month !== "" || year !== "") {
        setDateRange(defaultDateRange);
        setExactDate({
          date:"",
          month,
          year
        });
        return;
      }
      setDateRange(defaultDateRange);
      setExactDate(defaultExactDate);
  };

  function dateRangeChangeHandler({ lowerLimitDate, upperLimitDate }) {
    if( lowerLimitDate === dateRange.lowerLimitDate && upperLimitDate === dateRange.upperLimitDate) return;
    setDateRange({ lowerLimitDate, upperLimitDate });
    setExactDate(defaultExactDate);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onFilterItems({
        search: searchValue,
        sortFn: selectedSortValue.sortFn,
        priceRange,
        exactDate,
        dateRange
      });
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue, onFilterItems, selectedSortValue, priceRange, exactDate, dateRange]);

  const providerContext = {onPriceRangeChange:priceRangeChangeHandler, onExactDateChange:exactDateChangeHandler, onDateRangeChange:dateRangeChangeHandler};

  return (
    <div>
      <form className={styles["search-form"]}>
        <FilterSearchInput onSearchInputChange={searchChangeHandler}/>
        <div className={styles["search-form__filter-wrapper"]}>
          {!showSortingOptions && <div className={styles["search-form__open-container"]}><span className={styles["search-form__open"]} onClick={toggleShowSortingOptionsHandler}>Sort options</span></div>}
          {showSortingOptions && <div>
            <div className={styles["search-form__filters-container"]}>
              <FilterSort selectedSortValue={selectedSortValue} onSelectedSortValue={sortValueChangeHandler}/>
              <FilterRangeContext.Provider value={providerContext}>
                <FilterPriceRange rangeValues={priceRange} />
                <FilterDate exactDate={exactDate} dateRange={dateRange} dateMaxMin={dateMaxMin}/>
              </FilterRangeContext.Provider>
            </div>
            <button className={styles["search-form__close"]} type='button' onClick={toggleShowSortingOptionsHandler}>Close</button>
          </div>}
        </div>
      </form>
    </div>
  )
};

export default FilterItems;
