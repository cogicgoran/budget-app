import { SVGClock, SVGDollar, SVGSortAscName, SVGSortAscNumber, SVGSortDescName, SVGSortDescNumber} from 'svg/svg';

function sortDateDescending(a, b) {
  return a.date.getTime() > b.date.getTime() ? -1 : 1;
};

function sortDateAscending(a, b) {
  return a.date.getTime() > b.date.getTime() ? 1 : -1;
};

function sortNameDescending(a, b) {
  return a.product.toLowerCase() > b.product.toLowerCase() ? -1 : 1;
};

function sortNameAscending(a, b) {
  return a.product.toLowerCase() > b.product.toLowerCase() ? 1 : -1;
};

function sortPriceDescending(a, b) {
  return +a.price > +b.price ? -1 : 1;
};

function sortPriceAscending(a, b) {
  return +a.price > +b.price ? 1 : -1;
};

export const dataLabelSortSet = [
  {label: "Newer", data:"date-desc", sortFn: sortDateDescending, pre:[SVGSortDescNumber, SVGClock]},
  {label: "Older", data:"date-asc", sortFn: sortDateAscending, pre:[SVGSortAscNumber, SVGClock]},
  {label: "Price Ascending", data:"price-asc", sortFn: sortPriceAscending, pre:[SVGSortAscNumber, SVGDollar]},
  {label: "Price Descending", data:"price-desc", sortFn: sortPriceDescending, pre:[SVGSortDescNumber, SVGDollar]},
  {label: "Name Ascending", data:"name-asc", sortFn: sortNameAscending, pre:[SVGSortAscName]},
  {label: "Name Descending", data:"name-desc", sortFn: sortNameDescending, pre:[SVGSortDescName]}
];

export const defaultSort = {label: "Newer", data:"date-desc", sortFn: sortDateDescending};



