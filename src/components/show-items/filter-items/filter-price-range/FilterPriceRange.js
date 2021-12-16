import React, { useReducer } from 'react';
import styles from './FilterPriceRange.module.css';
import FilterPriceInput from './FilterPriceInput';

function filterPriceRangeReducer(state, action) {
  const { payload } = action;
  const { value, maxVal} = payload;
  const { minValue, maxValue } = state;


  switch (action.type) {
    case "minChange":
      if ( value < 0) return { ...state, minValue: 0};
      if ( value > maxVal) return { minValue: maxVal, maxValue: maxVal};
      if ( value <= maxValue) return { ...state, minValue: value};
      return { minValue: value, maxValue: value};
    case "maxChange":
      if ( value < 0) return { minValue: 0, maxValue : 0};
      if ( value > maxVal) return { ...state, maxValue: maxVal};
      if ( value >= minValue) return { ...state, maxValue: value};
      return { minValue: value, maxValue: value};
    default:
  }
}

function FilterPriceRange() {
  const maxVal = 2999;
  const [state, dispatch] = useReducer(filterPriceRangeReducer, {minValue: 0, maxValue: maxVal});

  return (
    <div className={styles["search-form__filter-price-range"]}>

      <div>
        <FilterPriceInput input={{id:"min-value-input", name:"min-value-input",type: "number", step: "1", min: "0", max: maxVal }}
          onDispatch={dispatch} reducerType="minChange" value={state.minValue}/>
        <FilterPriceInput input={{id:"min-value-range", name:"min-value-range",type: "range", step: "1", min: "0", max: maxVal }}
          onDispatch={dispatch} reducerType="minChange" value={state.minValue}/>
      </div>

      <div>
        <FilterPriceInput input={{id:"max-value-input", name:"max-value-input",type: "number", step: "1", min: "0", max: maxVal }}
          onDispatch={dispatch} reducerType="maxChange" value={state.maxValue} />
        <FilterPriceInput input={{id:"max-value-range", name:"max-value-range",type: "range", step: "1", min: "0", max: maxVal }}
          onDispatch={dispatch} reducerType="maxChange" value={state.maxValue}/>
      </div>
    </div>
  );
};

export default FilterPriceRange;
