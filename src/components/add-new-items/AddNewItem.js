import React, { useState } from 'react';
import useInput from '../../custom-hooks/useInput';
import styles from './AddNewItem.module.css';
import {validateProductName, validateProductPrice, validateProductDate} from './AddNewItem.validation';

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

    function resetInputFields() {
        productNameReset();
        productPriceReset();
        productDateReset();
    }

    function formSubmitHandler(e) {
        e.preventDefault();

        if (!formIsValid) return;

        const product = {
            product: productName,
            price: productPrice,
            date: new Date(productDate)
        };
        resetInputFields();
        props.onAddNewItem(product);
    };

    const productNameClasses = productNameHasError ? styles.invalid : "";
    const productPriceClasses = productPriceHasError ? styles.invalid : "";
    const productDateClasses = productDateHasError ? styles.invalid : "";

    return (
        <div className={styles["add-items-container"]}>
            {!isFormToggled && <div className={styles["add-items__btn-container"]}><button type="button" onClick={formToggleHandler}>Add New Item</button></div>}
            {isFormToggled && <form onSubmit={formSubmitHandler}>
                <div className={styles["add-items__controls-container"]}>
                    <div className={productNameClasses}>
                        <label htmlFor="product">Product Name:</label>
                        <input type="text" name="product" value={productName} onChange={productNameChangeHandler} onBlur={productNameBlurHandler} />
                    </div>
                    <div className={productPriceClasses}>
                        <label htmlFor="price">Product Price:</label>
                        <input autoComplete="off" type="number" step="1" min="0" max="9999999" name="price" value={productPrice} onChange={productPriceChangeHandler} onBlur={productPriceBlurHandler} />
                    </div>
                    <div className={productDateClasses}>
                        <label htmlFor="date">Product Date:</label>
                        <input type="date" name="date" min="2010-01-01" max="2036-01-01" value={productDate} onChange={productDateChangeHandler} onBlur={productDateBlurHandler} />
                    </div>
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