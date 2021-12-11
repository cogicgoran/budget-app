import React, { useState } from 'react';
import useInput from '../hooks/useInput';
import styles from './AddNewItem.module.css';

function validateProductName(name) {
    return name.length > 0;
};

function validateProductPrice(price) {
    return Number(price) > 0;
};

function validateProductDate(date) {
    return date.length !== 0;
}

function AddNewItem( props ) {
    const [isFormToggled, setIsFormToggled] = useState(false);
    
    function formToggleHandler() {
        setIsFormToggled(prevState => !prevState);
    };

    
    const {
        value: productName,
        valueIsValid: productNameIsValid,
        valueHasError: productNameHasError,
        valueChangeHandler: productNameChangeHandler,
        inputBlurHandler: productNameBlurHandler,
        reset: productNameReset
    } = useInput(validateProductName);

    const {
        value: productPrice,
        valueIsValid: productPriceIsValid,
        valueHasError: productPriceHasError,
        valueChangeHandler: productPriceChangeHandler,
        inputBlurHandler: productPriceBlurHandler,
        reset: productPriceReset
    } = useInput(validateProductPrice);
    
    const {
        value: productDate,
        valueIsValid: productDateIsValid,
        valueHasError: productDateHasError,
        valueChangeHandler: productDateChangeHandler,
        inputBlurHandler: productDateBlurHandler,
        reset: productDateReset
    } = useInput(validateProductDate);
    
    let formIsValid = false;

    if (productNameIsValid && productPriceIsValid && productDateIsValid) formIsValid = true;

    function formSubmitHandler(e) {
        e.preventDefault();

        if (!formIsValid) return;

        const product = {
            product: productName,
            price: productPrice,
            date: new Date(productDate)
        };
        console.log(product);
        productNameReset();
        productPriceReset();
        productDateReset();
        // props.onAddNewItem(product);
    };

    const productNameClasses = productNameHasError ? styles.invalid : "";
    const productPriceClasses = productPriceHasError ? styles.invalid : "";
    const productDateClasses = productDateHasError ? styles.invalid : "";

    return (
        <div className={styles["add-items-container"]}>
            {!isFormToggled && <div><button type="button" onClick={formToggleHandler}>Add New Item</button></div>}
            {isFormToggled && <form onSubmit={formSubmitHandler}>
                <div className={styles["add-items__controls-container"]}>
                    <div className={productNameClasses}>
                        <label htmlFor="product">Product Name:</label>
                        <input type="text" name="product" value={productName} onChange={productNameChangeHandler} onBlur={productNameBlurHandler} />
                    </div>
                    <div className={productPriceClasses}>
                        <label htmlFor="price">Product Price:</label>
                        <input type="number" step="1" name="price" value={productPrice} onChange={productPriceChangeHandler} onBlur={productPriceBlurHandler} />
                    </div>
                    <div className={productDateClasses}>
                        <label htmlFor="date">Product Date:</label>
                        <input type="date" name="date" value={productDate} onChange={productDateChangeHandler} onBlur={productDateBlurHandler} />
                    </div>
                </div>
                <div>
                   <div><button type="submit">Add Product</button></div> 
                   <div><button type="button" onClick={formToggleHandler}>Cancel</button></div> 
                </div>
            </form>}
        </div>
    )
};

export default AddNewItem;
