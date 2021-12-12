import  classes  from './App.module.css';
import Header from './components/Header';
import AddNewItem from './components/AddNewItem';
import ShowItems from './components/ShowItems';
import { useState } from 'react';
import { DUMMY_ITEMS } from './dummy-data/dummyData';

function App() {
  const [items, setItems] = useState(DUMMY_ITEMS);
  const [filteredItems, setFilteredItems] = useState([]);
  const [counter, setCounter] = useState(1);

  function addNewItemHandler(item) {
    item.id = counter;
    setItems( prevState => ([item, ...prevState]));
    setCounter(prevCounter => ++prevCounter);
  }

  function filterItemsHandler({search}) {
    console.log(search);
    const lowerSearch = search.toLowerCase();
    setFilteredItems(items.filter(item => item.product.toLowerCase().includes(lowerSearch)));
  }

  return (
    <div className={classes["app-container"]}>
      <Header />
      <AddNewItem onAddNewItem={addNewItemHandler}/>
      <ShowItems items={filteredItems} onFilterItems={filterItemsHandler}/>
    </div>
  );
}

export default App;
