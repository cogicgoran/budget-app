import React from 'react';
import styles from './DisplayItems.module.css';

function DisplayItems({ items }) {
  console.log("displayitems running");

  function getItemComponents() {
    if (items.length === 0) return <p className={styles["show-items__no-result"]}>No results found!</p>;
    return items.map(item => {
        const date = item.date.toLocaleString('default', { day: "numeric", month: 'short', year:"numeric" });
        return (<article key={item.id} className={styles["show-items__article"]}>
            <span className={styles["show-items__product"]}>{item.product}</span>
            <span className={styles["show-items__price"]}>{item.price}</span>
            <span className={styles["show-items__date"]}>{date}</span>
        </article>);
    });
  };

  return (
    <div>
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
};

export default DisplayItems;
