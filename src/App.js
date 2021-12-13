import styles from './App.module.css';
import Header from './components/header/Header';
import AddNewItem from './components/add-new-items/AddNewItem';
import ShowItems from './components/show-items/ShowItems';
import { useCallback, useMemo, useState } from 'react';
import { DUMMY_ITEMS } from './dummy-data/dummyData';

function App() {

  const [items, setItems] = useState(DUMMY_ITEMS);
  const [filteredItems, setFilteredItems] = useState([]);
  const [counter, setCounter] = useState(1);

  console.log("App RUNNING...");

  const addNewItemHandler = useCallback((item) => {
    item.id = counter;
    setItems( prevState => ([item, ...prevState]));
    setCounter(prevCounter => ++prevCounter);
  },[counter])

  const filterItemsHandler = useCallback(({ search }) => {
    const lowerSearch = search.toLowerCase();
    setFilteredItems(items.filter(item => item.product.toLowerCase().includes(lowerSearch)));
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
