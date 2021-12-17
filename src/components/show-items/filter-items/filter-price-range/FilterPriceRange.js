import React, { useEffect, useReducer, useContext } from 'react';
import styles from './FilterPriceRange.module.css';
import FilterPriceInputs from './FilterPriceInputs';
import FilterRangeContext from 'context/filter-range-context';
import FilterItemsContext from 'context/filter-items-context';

function filterPriceRangeReducer(state, action) {
  const { payload } = action;
  const { value, maxVal} = payload;
  const { minValue, maxValue } = state;
  console.log( value, minValue, maxValue, maxVal);

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
  const { onPriceRangeChange } = useContext(FilterRangeContext);
  const { maxVal } = useContext(FilterItemsContext);
  const [state, dispatch] = useReducer(filterPriceRangeReducer, {minValue: 0, maxValue: maxVal});

  useEffect(() => {
    onPriceRangeChange({minValue:state.minValue, maxValue: state.maxValue, maxVal: maxVal});
  }, [state])

  return (
    <div className={styles["search-form__filter-price-range"]}>
        <div className={styles["search-form__filter-price-range-display"]}>
          <span>Price Range:</span>
          <span>{state.minValue} - {state.maxValue}</span>
        </div>
        <div>
          <FilterPriceInputs key="min-value" input={{step: "1", min: "0", max: maxVal }}
            onDispatch={dispatch} reducerType="minChange" value={state.minValue}/>
          <FilterPriceInputs key="max-value" input={{step: "1", min: "0", max: maxVal }}
            onDispatch={dispatch} reducerType="maxChange" value={state.maxValue}/>
        </div>
    </div>
  );
};

export default FilterPriceRange;
