import { useState } from "react";
import styles from "./AppTodo.module.css";
import { IoAddCircleOutline } from "react-icons/io5";
function AppTodo({ addNewItem }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const clickOnAddButton = () => {
    addNewItem(name, date);
    setName("");
    setDate("");
  };
  return (
    <>
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-4">
            <input
              type="text"
              placeholder="Enter the text"
              onChange={handleName}
              value={name}
            />
          </div>
          <div className="col-4">
            <input type="date" value={date} onChange={handleDate} />
          </div>
          <div className="col-1">
            <button
              type="button"
              className={`${styles["kg-button"]} btn btn-success`}
              onClick={clickOnAddButton}
            >
              <IoAddCircleOutline/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppTodo;
