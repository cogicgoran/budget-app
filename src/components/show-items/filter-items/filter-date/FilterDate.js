import React from 'react';
import styles from './FilterDate.module.css';

import FilterExactDate from './filter-exact-date/FilterExactDate';
import FilterDateRange from './filter-date-range/FilterDateRange';

function FilterDate(props) {
  return (
    <div className={styles["search-form__filter-date-range"]}>
        <FilterExactDate exactDate={props.exactDate} />
        <FilterDateRange dateRange={props.dateRange} dateMaxMin={props.dateMaxMin}/>
    </div>
  );
};

export default FilterDate;
