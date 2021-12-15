import React from 'react';
import styles from './SortItem.module.css';
import { SVGCheckmark } from 'svg/svg';

function SortItem({label, data, onClick, isSorting, pre}) {
  function getPreIcons() {
    return pre.map(componentFn => {
      return componentFn({className:styles["svg-icon"]});
    });
  };

  
  return (
    <li key={data} className={styles["filter-sort-item"]} onClick={onClick.bind(this, data)} data-sort-by={data}>
      <span>{getPreIcons()}{label}{isSorting ? <SVGCheckmark className={styles["svg-checkmark"] + " " + styles["svg-icon"]}/>:""}</span>
    </li>
  )
};

export default SortItem;
