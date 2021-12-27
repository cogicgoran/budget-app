
export function getFilteredItems(array, filterValues) {
  const { search, sortFn, priceRange, exactDate, dateRange } = filterValues;
  const lowerSearch = search.toLowerCase();
  let result;

  result = array.filter(isSearchIncluded);
  result.sort(sortFn);
  result = result.filter(isInPriceRange);
  result = result.filter(getDateFilterFunction());

  return result;


  // ***********************************
  function isSearchIncluded (item) {
    return item.product.toLowerCase().includes(lowerSearch);
  };

  function isInPriceRange(item){
    const price = Number(item.price);
    return price >= priceRange.minValue && price <= priceRange.maxValue;
  };

  function getDateFilterFunction() {
    const { date, month, year} = exactDate;
    const { lowerLimitDate, upperLimitDate } = dateRange;

    if ( date == "" && month == "" && year == "" ) return rangeFilter;
    if ( date != "") return dateFilter;
    return monthYearFilter;

    function rangeFilter(item) {
      return (!lowerLimitDate || new Date(item.date).getTime() >= lowerLimitDate) && (!upperLimitDate || new Date(item.date).getTime() <= upperLimitDate);
    };

    function dateFilter(item) {
      return new Date(item.date).toISOString().substring(0,10) == date;
    };

    function monthYearFilter(item) {
      return (!month || item.date.getMonth() == month) && (!year || item.date.getFullYear() == year);
    };
  }
};