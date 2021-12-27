import React, { useEffect, useReducer, useContext } from 'react';
import FilterRangeContext from 'context/filter-range-context';

function exactDateReducer(state, action) {
  switch (action.type) {
    case "date":
      return {date:action.payload, month:"", year:""};
    case "month":
      return {...state, date:"", month:action.payload};
    case "year":
      return {...state, date:"", year:action.payload};
    default:
      return state;
  }
}

function FilterExactDate(props) {
  const [exactDate, dispatch] = useReducer(exactDateReducer, props.exactDate);
  const { onExactDateChange } = useContext(FilterRangeContext);

  useEffect(() => {
    onExactDateChange(exactDate);
  }, [exactDate])

  function dispatchChange(event) {
    dispatch({type: event.target.name, payload:event.target.value})
  }

  const displayDate = props.exactDate.date;
  const displayMonth = props.exactDate.month;
  const displayYear = props.exactDate.year;

  return (
    <div>
      <div>
        <label htmlFor="date">Exact date:</label>
        <input name="date" type="date" id='date' value={displayDate} onChange={dispatchChange}/>
      </div>
      <div>
        <label htmlFor="month">Month:</label>
        <select name="month" id="month" value={displayMonth} onChange={dispatchChange}>
          <option value="">All</option>
          <option value="0">Jan</option>
          <option value="1">Feb</option>
          <option value="2">Mar</option>
          <option value="3">Apr</option>
          <option value="4">May</option>
          <option value="5">Jun</option>
          <option value="6">Jul</option>
          <option value="7">Aug</option>
          <option value="8">Sep</option>
          <option value="9">Oct</option>
          <option value="10">Nov</option>
          <option value="11">Dec</option>
        </select>
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <select name="year" id="year" value={displayYear} onChange={dispatchChange}>
          <option value="">All</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default FilterExactDate;
