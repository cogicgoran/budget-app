import React, { useReducer, useContext, useEffect } from 'react';
import FilterRangeContext from 'context/filter-range-context';

import { CHANGE_TYPE_MIN, CHANGE_TYPE_MAX } from './FilterDateRange.constants';

function filterDateRangeReducer(state, action) {
  // All variables use unix timestamp as values
  const { payload } = action;
  const { newDate, dateMaxMin} = payload;
  const { lowerLimitDate, upperLimitDate } = state;

  if (action.type === CHANGE_TYPE_MIN) {
    return { ...state, lowerLimitDate: Math.min(dateMaxMin.maxDate, Math.max(newDate, dateMaxMin.minDate)), upperLimitDate: Math.max(dateMaxMin.minDate, Math.min(dateMaxMin.maxDate, Math.max(newDate, upperLimitDate)))};
  };
  
  if (action.type === CHANGE_TYPE_MAX) {
    return { ...state, lowerLimitDate: Math.max( dateMaxMin.minDate, Math.min( newDate, Math.max( dateMaxMin.minDate, lowerLimitDate ) ) ), upperLimitDate: Math.max( Math.min(dateMaxMin.maxDate, newDate), dateMaxMin.minDate)};
  };
  return {...state};
};

function FilterDateRange(props) {
  const { onDateRangeChange } = useContext(FilterRangeContext);
  const [state, dispatch] = useReducer(filterDateRangeReducer, props.dateRange);

  function dateChangeHandler(type, event) {
    dispatch({type, payload:{newDate:new Date(event.target.value).getTime(), dateMaxMin:props.dateMaxMin}});
  };

  useEffect(()=> {
    onDateRangeChange(state);
  }, [state]);

  const displayLowerLimitDate = new Date(props.dateRange.lowerLimitDate).toISOString().substring(0,10);
  const displayUpperLimitDate = new Date(props.dateRange.upperLimitDate).toISOString().substring(0,10);

  return (
    <div>
      <div><span>Date Range:</span></div>
      <div>
        <label htmlFor="date-min">From:</label>
        <input type="date" name="date-min" id="date-min" value={displayLowerLimitDate} onChange={dateChangeHandler.bind(this, CHANGE_TYPE_MIN)}/>
      </div>
      <div>
        <label htmlFor="date-max">To:</label>
        <input type="date" name="date-max" id="date-max" value={displayUpperLimitDate} onChange={dateChangeHandler.bind(this, CHANGE_TYPE_MAX)} />
      </div>
    </div>
  );
};

export default FilterDateRange;
