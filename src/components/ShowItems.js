import React, { useState, useEffect } from 'react'
import styles from './ShowItems.module.css';

function ShowItems({ items, onFilterItems }) {
    const [searchValue, setSearchValue] = useState("");
    console.log("ShowItems RUNNING");

    function getItemComponents() {
        return items.map(item => {
            const date = item.date.toLocaleString('default', { day: "numeric", month: 'short', year:"numeric" })
            return (<article key={item.id} className={styles["show-items__article"]}>
                <span className={styles["show-items__product"]}>{item.product}</span>
                <span className={styles["show-items__price"]}>{item.price}</span>
                <span className={styles["show-items__date"]}>{date}</span>
            </article>)
        })
    }

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
        console.log("efect ran");
        const timer = setTimeout(() => {
            onFilterItems({
                search: searchValue
            })
        }, 500)
        return () => {
            clearTimeout(timer);
        }
    }, [searchValue, onFilterItems])

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
                    {getItemComponents()}
                </div>
            </div>
        </div>
    )
}

export default React.memo(ShowItems);
