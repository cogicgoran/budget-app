import React, { useState } from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef(function(props, ref) {
  const [value, setValue] = useState("");
  const [valueIsTouched, setValueIsTouched] = useState(false);
  
  
    const {label,validator} = props;

    const valueIsValid = validator(value);
    const valueHasError = valueIsTouched && !valueIsValid;

  function valueChangeHandler(e) {
    setValue(e.target.value);
  }

  function valueBlurHandler() {
    setValueIsTouched(true);
  }

  return (
    <div className={valueHasError ? styles.invalid : ""}>
      <label htmlFor={props.name}>{label}</label>
      <input ref={ref} {...props.input} value={value} onChange={valueChangeHandler} onBlur={valueBlurHandler}></input>
    </div>
  )
})

export default Input;
