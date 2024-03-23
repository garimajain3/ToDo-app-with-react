import AppHeader from "./components/AppHeader";
import AppTodo from "./components/AppTodo";
// import AppTodoItem1 from "./components/AppTodoItem1";
// import AppTodoItem2 from "./components/AppTodoItem2";
import './App.css';
import AppTodoItem from "./components/AppTodoItem";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";
function App() {
  

  const [items,setItems] = useState([])

  const handleNewitem = (name , date) =>{
    // console.log(name,date)

    const newAddItems = [...items,{
      name:name,
      date:date

    }]

    

    setItems(newAddItems)


  }

  const handleDeleteItem = (name) =>{
    // console.log(name)
    const leftItems = items.filter((item)=>item.name!=name)
    setItems(leftItems)
  }

  return (
    <>
    <center className="todo-container" >
      <AppHeader></AppHeader>
      
      <AppTodo addNewItem = {handleNewitem}></AppTodo>

      {items.length ===0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={items} deleteItem={handleDeleteItem}></TodoItems>
      
     
      </center>
      
    </>
  );
}

export default App;
