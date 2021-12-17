import React, { useContext } from 'react';
import FilterItemsContext from 'context/filter-items-context';

const  NUMBER_TYPE_EXTENSION  = "-number";
const  RANGE_TYPE_EXTENSION  = "-range";

const FilterPriceInput = function(props) {
  const { maxVal } = useContext(FilterItemsContext);
  const { onDispatch, value, reducerType } = props;
  // const { max: maxVal } = props.input;

  const numberInputName = props.name + NUMBER_TYPE_EXTENSION;
  const rangeInputName = props.name + RANGE_TYPE_EXTENSION;

  function changeHandler( event ) {
    // Using + to convert strings into numbers
    onDispatch({type: reducerType, payload: {value: +event.target.value, maxVal: +maxVal}});
  };

  return (
    <div>
      <label htmlFor={numberInputName}>{reducerType === "minChange" ? "Min Value:" : "Max Value:"}</label>
      <input {...props.input} id={numberInputName} name={numberInputName} type="number" onChange={changeHandler} value={value}></input>
      <input {...props.input} id={rangeInputName} name={rangeInputName} type="range" onChange={changeHandler} value={value}></input>
    </div>
  );
};

export default FilterPriceInput;
