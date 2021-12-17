import React, { useRef, useState } from 'react';
import styles from './AddNewItem.module.css';
import {validateProductName, validateProductPrice, validateProductDate} from './AddNewItem.validation';
import Input from '../UI/Input';

function AddNewItem( props ) {
    const [isFormToggled, setIsFormToggled] = useState(false);
    const productRef = useRef();
    const priceRef = useRef();
    const dateRef = useRef();
    
    function formToggleHandler() {
        setIsFormToggled(prevState => !prevState);
    };

    function formSubmitHandler( event ) {
        event.preventDefault();
        const product = productRef.current.value;
        const price = priceRef.current.value;
        const date = dateRef.current.value;

        if (!(validateProductName(product) && validateProductPrice(price) && validateProductDate(date))) return;

        const item = {
            product: product,
            price: price,
            date: new Date(date)
        };

        props.onAddNewItem(item);

        productRef.current.value = "";
        priceRef.current.value = "";
        dateRef.current.value = "";
    };

    return (
        <div className={styles["add-items-container"]}>
            {!isFormToggled && <div className={styles["add-items__btn-container"]}><button type="button" onClick={formToggleHandler}>Add New Item</button></div>}
            {isFormToggled && <form onSubmit={formSubmitHandler}>
                <div className={styles["add-items__controls-container"]}>
                    <Input ref={productRef} label="Product Name:" input={{id:"product", type: "text", name: "product"}} validator={validateProductName}></Input>
                    <Input ref={priceRef} label="Product Price:" input={{id:"price", type: "number", name: "price", min:"0", max:"99999999", step:"1"}} validator={validateProductPrice}></Input>
                    <Input ref={dateRef} label="Product Date:" input={{id:"date", type: "date", name: "date", min:"2010-01-01", max:"2036-01-01"}} validator={validateProductDate}></Input>
                </div>
                <div className={styles["add-items__btn-container"]}>
                   <div><button type="submit">Add Product</button></div> 
                   <div><button type="button" onClick={formToggleHandler}>Cancel</button></div> 
                </div>
            </form>}
        </div>
    )
};

export default React.memo(AddNewItem);
