import React from 'react';
import styles from './FilterSort.module.css';
import SortItem from './sort-item/SortItem';

import { dataLabelSortSet } from '../FilterSortData';

function FilterSort({selectedSortValue, onSelectedSortValue}) {

  function sortByHandler(data) {
    const itemExists = dataLabelSortSet.find(set => (set.data === data));
    if (!itemExists) return;
    onSelectedSortValue(itemExists);
  }

  return (
    <div className={styles["search-form__filter-sort"]}>
      <span className={styles["search-form__filter-selected"]}>Sorted by:<br/>{selectedSortValue.label}</span>
      <ul>
        {dataLabelSortSet.map(set => {
          return <SortItem key={set.data} isSorting={selectedSortValue.data === set.data}  label={set.label} data={set.data} onClick={sortByHandler} pre={set.pre}/>
        })}
      </ul>
    </div>
  )
};

export default FilterSort;
