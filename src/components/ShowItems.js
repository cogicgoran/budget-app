import React from 'react'

function ShowItems({ items }) {

    function getItemComponents(items) {
        return items.map(item => {
            const date = item.date.toLocaleString('default', { day: "numeric", month: 'short', year:"numeric" })
            return (<article key={item.id}>
                <p>{item.product}</p>
                <p>{item.price}</p>
                <p>{date}</p>
                
            </article>)
        })
    }
    return (
        <div>
            {getItemComponents(items)}
        </div>
    )
}

export default React.memo(ShowItems);
