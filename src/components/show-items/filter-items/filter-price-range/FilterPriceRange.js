import React, { useEffect, useReducer, useContext } from 'react';
import styles from './FilterPriceRange.module.css';
import FilterPriceInputs from './filter-price-inputs/FilterPriceInputs';
import FilterRangeContext from 'context/filter-range-context';
import { CHANGE_TYPE_MAX, CHANGE_TYPE_MIN } from './FilterPriceRange.constants';

function filterPriceRangeReducer(state, action) {
  const { payload } = action;
  const { value, maxVal} = payload;
  const { minValue, maxValue } = state;

  if (action.type === CHANGE_TYPE_MIN) {
    return { ...state, minValue: Math.max(0, value), maxValue: Math.max(value, Math.min(maxVal, maxValue))};
  };
  
  if (action.type === CHANGE_TYPE_MAX) {
    return { ...state, minValue: Math.min( minValue, value ), maxValue: Math.min(maxVal, value)};
  };
};

function FilterPriceRange(props) {
  const { onPriceRangeChange } = useContext(FilterRangeContext);
  const { rangeValues } = props;
  const { maxVal, minValue, maxValue } = rangeValues
  const [state, dispatch] = useReducer(filterPriceRangeReducer, {minValue: minValue, maxValue: maxValue});

  useEffect(() => {
    onPriceRangeChange({minValue:state.minValue, maxValue: state.maxValue});
  }, [state]);

  return (
    <div className={styles["search-form__filter-price-range"]}>
        <div className={styles["search-form__filter-price-range-display"]}>
          <span>Price Range:</span>
          <span>{state.minValue} - {state.maxValue}</span>
        </div>
        <div>
          <FilterPriceInputs key="min-value" input={{step: "1", min: "0", max: maxVal }}
            onDispatch={dispatch} reducerType={CHANGE_TYPE_MIN} value={state.minValue}/>
          <FilterPriceInputs key="max-value" input={{step: "1", min: "0", max: maxVal }}
            onDispatch={dispatch} reducerType={CHANGE_TYPE_MAX} value={state.maxValue}/>
        </div>
    </div>
  );
};

export default FilterPriceRange;