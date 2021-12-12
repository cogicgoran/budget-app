import React, { useState, useEffect, useCallback, useMemo } from 'react'
import styles from './ShowItems.module.css';

function ShowItems({ items, onFilterItems }) {
    const [searchValue, setSearchValue] = useState("");

    function getItemComponents(items) {
        console.log("getitmcom called");
        return items.map(item => {
            const date = item.date.toLocaleString('default', { day: "numeric", month: 'short', year:"numeric" })
            return (<article key={item.id} className={styles["show-items__article"]}>
                <span className={styles["show-items__product"]}>{item.product}</span>
                <span className={styles["show-items__price"]}>{item.price}</span>
                <span className={styles["show-items__date"]}>{date}</span>
                
            </article>)
        })
    }

    // const getItemComponentsMemo = useMemo(() => getItemComponents(items));
    

    function searchChangeHandler(e) {
        setSearchValue(e.target.value);
    }

    function searchSubmitHandler(e) {
        e.preventDefault();
        onFilterItems({
            search: searchValue
        })
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            onFilterItems({
                search: searchValue
            })
        }, 500)
        return () => {
            clearTimeout(timer);
        }
    }, [searchValue])

    console.log("rendered");

    return (
        <div className={styles["show-items"]}>
            <div>
                <form className={styles["search-form"]} onSubmit={searchSubmitHandler}>
                    <input type="search" value={searchValue} onChange={searchChangeHandler}/>
                    <button type="submit">Search</button>
                </form>
                <div>
                    filter
                </div>
            </div>
            <div className={styles["show-items__article-wrapper"]}>
                <div className={styles["show-items__header"]}>
                    <span className={styles["show-items__product"]}>Product</span>
                    <span className={styles["show-items__price"]}>Price</span>
                    <span className={styles["show-items__date"]}>Date</span>
                </div>
                <div>
                    {getItemComponents(items)}
                </div>
            </div>
        </div>
    )
}

export default React.memo(ShowItems);
