import AppTodoItem from "./AppTodoItem"
const TodoItems = ({todoItems , deleteItem}) =>{
    return <>
    <div className="item-container">
        {todoItems.map(item => 
            <AppTodoItem key={item.name}
            todoDate={item.date} todoName={item.name} deleteItem={deleteItem}></AppTodoItem>
            )}

      </div>
    </>
}

export default TodoItems