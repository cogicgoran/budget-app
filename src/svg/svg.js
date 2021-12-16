import React from 'react';
// SVG Components

export function SVGCheckmark({className}) {
  return (
    <svg className={className} aria-hidden="true" focusable="false" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path>
    </svg>
  );
};

export function SVGClock({className}) {
  return (
    <svg className={className} aria-hidden="true" focusable="false" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="currentColor" d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
    </svg>
  );
};

export function SVGDollar({className}) {
  return (
    <svg className={className} aria-hidden="true" focusable="false" data-icon="dollar-sign" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512">
      <path fill="currentColor" d="M211.9 242.1L95.6 208.9c-15.8-4.5-28.6-17.2-31.1-33.5C60.6 150 80.3 128 105 128h73.8c15.9 0 31.5 5 44.4 14.1 6.4 4.5 15 3.8 20.5-1.7l22.9-22.9c6.8-6.8 6.1-18.2-1.5-24.1C240.4 74.3 210.4 64 178.8 64H176V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C60.3 64 14.9 95.8 3.1 143.6c-13.9 56.2 20.2 111.2 73 126.3l116.3 33.2c15.8 4.5 28.6 17.2 31.1 33.5C227.4 362 207.7 384 183 384h-73.8c-15.9 0-31.5-5-44.4-14.1-6.4-4.5-15-3.8-20.5 1.7l-22.9 22.9c-6.8 6.8-6.1 18.2 1.5 24.1 24.6 19.1 54.6 29.4 86.3 29.4h2.8v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h2.5c49.2 0 94.6-31.8 106.4-79.6 13.9-56.2-20.2-111.2-73-126.3z"></path>
    </svg>
  );
};

export function SVGSearch({className}) {
  return (
    <svg className={className} aria-hidden="true" focusable="false"  data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path>
    </svg>
  );
};

export function SVGSortAscName({className}) {
  return (
    <svg className={className} aria-hidden="true" focusable="false" data-icon="sort-alpha-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="currentColor" d="M432 288H304a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8l87.68.07-92.76 131.79a16 16 0 0 0-2.92 9.21V472a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8h-87.81l92.89-131.86a16 16 0 0 0 2.92-9.21V296a8 8 0 0 0-8-8zm15.29-80.06l-59.76-168A11.87 11.87 0 0 0 376.37 32h-16.74a11.87 11.87 0 0 0-11.16 7.94l-59.76 168A12 12 0 0 0 299.88 224H311a11.86 11.86 0 0 0 11.21-8.09l15.1-44.27h60.85L413.5 216a11.88 11.88 0 0 0 11.2 8h11.42a12 12 0 0 0 11.17-16.06zm-99.9-67.36s19.62-56.87 20.5-60c.87 3.14 20.24 60 20.24 60zm-148.46 231a11.93 11.93 0 0 0-16.91-.09l-54 52.67V40a8 8 0 0 0-8-8H104a8 8 0 0 0-8 8v383.92l-53.94-52.35a12 12 0 0 0-16.92 0l-5.64 5.66a12 12 0 0 0 0 17l84.06 82.3a11.94 11.94 0 0 0 16.87 0l84-82.32a12 12 0 0 0 .09-17z"></path>
    </svg>
  );
};

export function SVGSortAscNumber({className}) {
  return (
    <svg className={className} aria-hidden="true" focusable="false" data-icon="sort-numeric-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="currentColor" d="M344.49 257.48a72 72 0 1 0 52.16 132c-8.84 31.22-35.92 54.86-69.08 58a8.07 8.07 0 0 0-7.57 7.92v16.07a8 8 0 0 0 8.38 8.05A112.15 112.15 0 0 0 432 367.86v-40a72.13 72.13 0 0 0-87.51-70.38zM360 367.86a40 40 0 1 1 40-40 40 40 0 0 1-40 40zM424 192h-40V48a16 16 0 0 0-16-16h-12a16 16 0 0 0-13.57 7.52l-20 32A16 16 0 0 0 336 96h16v96h-40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zM198.93 371.56a11.93 11.93 0 0 0-16.91-.09l-54 52.67V40a8 8 0 0 0-8-8H104a8 8 0 0 0-8 8v383.92l-53.94-52.35a12 12 0 0 0-16.92 0l-5.64 5.66a12 12 0 0 0 0 17l84.06 82.3a11.94 11.94 0 0 0 16.87 0l84-82.32a12 12 0 0 0 .09-17z"></path>
    </svg>
  );
};

export function SVGSortDescName({className}) {
  return (
    <svg className={className} aria-hidden="true" focusable="false" data-icon="sort-alpha-down-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="currentColor" d="M304 224h128a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8h-87.81l92.89-131.86a16 16 0 0 0 2.92-9.21V40a8 8 0 0 0-8-8H304a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8l87.68.07-92.76 131.79a16 16 0 0 0-2.92 9.21V216a8 8 0 0 0 8 8zm143.29 239.94l-59.76-168a11.87 11.87 0 0 0-11.16-7.94h-16.74a11.87 11.87 0 0 0-11.16 7.94l-59.76 168A12 12 0 0 0 299.88 480H311a11.86 11.86 0 0 0 11.21-8.09l15.1-44.27h60.85L413.5 472a11.88 11.88 0 0 0 11.2 8h11.42a12 12 0 0 0 11.17-16.06zm-99.9-67.36s19.62-56.87 20.5-60c.87 3.14 20.24 60 20.24 60zm-148.46-25a11.93 11.93 0 0 0-16.91-.09l-54 52.67V40a8 8 0 0 0-8-8H104a8 8 0 0 0-8 8v383.92l-53.94-52.35a12 12 0 0 0-16.92 0l-5.64 5.66a12 12 0 0 0 0 17l84.06 82.3a11.94 11.94 0 0 0 16.87 0l84-82.32a12 12 0 0 0 .09-17z"></path>
    </svg>
  );
};

export function SVGSortDescNumber({className}) {
  return (
    <svg className={className} aria-hidden="true" focusable="false" data-icon="sort-numeric-down-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="currentColor" d="M424 448h-40V304a16 16 0 0 0-16-16h-12a16 16 0 0 0-13.57 7.52l-20 32A16 16 0 0 0 336 352h16v96h-40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zM344.49 33.92A72 72 0 0 0 360 176.29a71.13 71.13 0 0 0 36.65-10.37c-8.84 31.22-35.92 54.86-69.08 58a8.08 8.08 0 0 0-7.57 7.92v16.07a8 8 0 0 0 8.38 8.06A112.16 112.16 0 0 0 432 144.29v-40a72.13 72.13 0 0 0-87.51-70.37zM360 144.29a40 40 0 1 1 40-40 40 40 0 0 1-40 40zM198.93 371.56a11.93 11.93 0 0 0-16.91-.09l-54 52.67V40a8 8 0 0 0-8-8H104a8 8 0 0 0-8 8v383.92l-53.94-52.35a12 12 0 0 0-16.92 0l-5.64 5.66a12 12 0 0 0 0 17l84.06 82.3a11.94 11.94 0 0 0 16.87 0l84-82.32a12 12 0 0 0 .09-17z"></path>
    </svg>
  );
};
