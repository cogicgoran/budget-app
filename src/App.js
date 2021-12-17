import React from 'react';
import styles from './App.module.css';
import Header from './components/header/Header';
import AddNewItem from './components/add-new-items/AddNewItem';
import ShowItems from './components/show-items/ShowItems';
import { useState, useCallback, useMemo } from 'react';
import { EXAMPLE_ITEMS } from './example-data/exampleData';
import FilterItemsContext from 'context/filter-items-context';

function App() {
  
  const [items, setItems] = useState(EXAMPLE_ITEMS);
  const [filteredItems, setFilteredItems] = useState([]);
  const [counterID, setcounterID] = useState(1);

  // debugger;
  const maxVal = useMemo(() => Math.max(...items.map(item => +item.price)), [items]);
  
  const addNewItemHandler = useCallback((item) => {
    item.id = counterID;
    setItems( prevState => ([item, ...prevState]));
    setcounterID(prevCount => prevCount + 1);
  },[counterID]);
  
  // TODO: Find a way to not re-evaluate ShowItems if arguments passed have not changed
  const filterItemsHandler = useCallback(({ search, sortFn, priceRange }) => {
    const lowerSearch = search.toLowerCase();
    const filterBySearch = items.filter(item => item.product.toLowerCase().includes(lowerSearch));
    const filterAfterSort = filterBySearch.sort(sortFn);
    const filterAfterRange = filterAfterSort.filter(item => +item.price >= priceRange.minValue && +item.price <= priceRange.maxValue);
    setFilteredItems(filterAfterRange);
  },[items]);
  
  const filteredItemsMemoed = useMemo(() => {return [...filteredItems]}, [filteredItems]);

  return (
    <div className={styles["app-container"]}>
      <Header />
      <AddNewItem onAddNewItem={addNewItemHandler}/>
      <FilterItemsContext.Provider value={{onFilterItems:filterItemsHandler, maxVal}}>
        <ShowItems items={filteredItemsMemoed}/>
      </FilterItemsContext.Provider>
    </div>
  );
};

export default App;
