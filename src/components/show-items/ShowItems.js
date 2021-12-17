import React, { useMemo } from 'react'
import styles from './ShowItems.module.css';
import DisplayItems from './display-items/DisplayItems'
import FilterItems from './filter-items/FilterItems';

function ShowItems({ items }) {
    
    return (
        <div className={styles["show-items"]}>
            <FilterItems />
            <DisplayItems items={items}/>
            
        </div>
    )
}

export default React.memo(ShowItems);
