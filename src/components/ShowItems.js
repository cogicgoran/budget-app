import React from 'react'
import styles from './ShowItems.module.css';

function ShowItems({ items }) {

    function getItemComponents(items) {
        return items.map(item => {
            const date = item.date.toLocaleString('default', { day: "numeric", month: 'short', year:"numeric" })
            return (<article key={item.id} className={styles["show-items__article"]}>
                <span className={styles["show-items__product"]}>{item.product}</span>
                <span className={styles["show-items__price"]}>{item.price}</span>
                <span className={styles["show-items__date"]}>{date}</span>
                
            </article>)
        })
    }
    return (
        <div className={styles["show-items"]}>
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
