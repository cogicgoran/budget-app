import styles from './App.module.css';
import Header from './components/header/Header';
import AddNewItem from './components/add-new-items/AddNewItem';
import ShowItems from './components/show-items/ShowItems';
import { useCallback, useMemo, useState } from 'react';
import { DUMMY_ITEMS } from './dummy-data/dummyData';

function App() {

  const [items, setItems] = useState(DUMMY_ITEMS);
  const [filteredItems, setFilteredItems] = useState([]);
  const [counterID, setcounterID] = useState(1);

  const addNewItemHandler = useCallback((item) => {
    item.id = counterID;
    setItems( prevState => ([item, ...prevState]));
    setcounterID(prevCount => prevCount + 1);
  },[counterID])

  // TODO: Find a way to not re-evaluate ShowItems if arguments passed have not changed
  const filterItemsHandler = useCallback(({ search, sortFn }) => {
    const lowerSearch = search.toLowerCase();
    const filterBySearch = items.filter(item => item.product.toLowerCase().includes(lowerSearch));
    setFilteredItems(filterBySearch.sort(sortFn));
  },[items])

  const filteredItemsMemoed = useMemo(() => {return [...filteredItems]}, [filteredItems]);

  return (
    <div className={styles["app-container"]}>
      <Header />
      <AddNewItem onAddNewItem={addNewItemHandler}/>
      <ShowItems items={filteredItemsMemoed} onFilterItems={filterItemsHandler}/>
    </div>
  );
}

export default App;
