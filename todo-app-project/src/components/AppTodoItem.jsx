import { TiDeleteOutline } from "react-icons/ti";

function AppTodoItem({ todoName, todoDate, deleteItem }) {
  return (
    <>
      <div className="container">
        <div className="row kg-row">
          <div className="col-4">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-4">
            <button
              type="button"
              className="btn btn-danger kg-button"
              onClick={() => {
                deleteItem(todoName);
              }}
            >
              <TiDeleteOutline />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppTodoItem;
