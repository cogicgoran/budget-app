import React from 'react';

const FilterPriceInput = function(props) {
  const { onDispatch, value, reducerType } = props;
  const { max: maxVal } = props.input;

  function changeHandler(e) {
    onDispatch({type: reducerType, payload: {value: +e.target.value, maxVal: +maxVal}});
  };

  return (
    <div>
      <input {...props.input} onChange={changeHandler} value={value}></input>
    </div>
  );
};

export default FilterPriceInput;
