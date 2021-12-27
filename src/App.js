import React from 'react';
import styles from './App.module.css';
import Header from './components/header/Header';
import AddNewItem from './components/add-new-items/AddNewItem';
import ShowItems from './components/show-items/ShowItems';
import { useState, useCallback, useMemo } from 'react';
import { EXAMPLE_ITEMS } from './example-data/exampleData';
import FilterItemsContext from 'context/filter-items-context';
import { getFilteredItems } from './App.functions';

function App() {
  
  const [items, setItems] = useState(EXAMPLE_ITEMS);
  const [filteredItems, setFilteredItems] = useState([]);
  const [counterID, setcounterID] = useState(1);

  const maxVal = useMemo(() => Math.max(...items.map(item => +item.price)), [items]);
  const dateMaxMin = useMemo(() => {
    return {maxDate:Math.max(...items.map(item => item.date.getTime())), minDate:Math.min(...items.map(item => item.date.getTime()))};
  }, [items]);
  
  const addNewItemHandler = useCallback((item) => {
    item.id = counterID;
    setItems( prevState => ([item, ...prevState]));
    setcounterID(prevCount => prevCount + 1);
  },[counterID]);
  
  // TODO: Find a way to not re-evaluate ShowItems if arguments passed have not changed
  const filterItemsHandler = useCallback(function (filterValues){
    const newFilteredItems = getFilteredItems(items, filterValues);
    setFilteredItems(newFilteredItems);
  } ,[items]);
  
  const filteredItemsMemoed = useMemo(() => {return [...filteredItems]}, [filteredItems]);

  return (
    <div className={styles["app-container"]}>
      <Header />
      <AddNewItem onAddNewItem={addNewItemHandler}/>
      <FilterItemsContext.Provider value={{onFilterItems:filterItemsHandler, maxVal, dateMaxMin}}>
        <ShowItems items={filteredItemsMemoed}/>
      </FilterItemsContext.Provider>
    </div>
  );
};

export default App;
