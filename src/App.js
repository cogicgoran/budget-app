import  classes  from './App.module.css';
import Header from './components/Header';
import AddNewItem from './components/AddNewItem';
import ShowItems from './components/ShowItems';
import { useState } from 'react';


const DUMMY_ITEMS = [
  {
    id: 'e1',
    product: "banana",
    price: "22",
    date: new Date("2021-12-04")
  },
  {
    id: 'e2',
    product: "jabuka",
    price: "31",
    date: new Date("2021-12-08")
  },
  {
    id: 'e3',
    product: "krompir",
    price: "28",
    date: new Date("2021-12-08")
  },
]

function App() {
  const [items, setItems] = useState(DUMMY_ITEMS);
  const [counter, setCounter] = useState(1);

  function addNewItemHandler(item) {
    item.id = counter;
    setItems( prevState => ([...prevState, item]));
    setCounter(prevCounter => ++prevCounter);
  }

  return (
    <div className={classes["app-container"]}>
      <Header />
      <AddNewItem onAddNewItem={addNewItemHandler}/>
      <ShowItems items={items}/>
    </div>
  );
}

export default App;
