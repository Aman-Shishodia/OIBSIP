import React, { useState } from "react";
import "./Todo.css";


const Todo = () => {
  const [item, setitem] = useState("");
  const [list, setlist] = useState([]);

  const additem = (e) => {
    setitem(e.target.value);
  };

  const addtodo = (e) => {
    setlist((oldlist) => {
      return [...oldlist, item];
    });
    setitem("");
  };

  const deleteitem = (id) => {
    setlist((oldlist) => {
      return oldlist.filter((arrele, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="todo">
        <div className="todo-content">
          <h1>
            {" "}
            <span className="green">TODO</span>List
          </h1>
          <input
            type="text"
            placeholder="What Do You Want to Do..."
            value={item}
            onChange={additem}
          />
          <button className="add-btn" onClick={addtodo}>
            +
          </button>
          <ol>
            {list.map((data, index) => {
              return (
                <>
                  <li key={index}>
                    {data}{" "}
                    <span
                      className="remove-btn"
                      onClick={() => deleteitem(index)}
                    >
                      remove
                    </span>
                  </li>
                </>
              );
            })}
          </ol>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Todo;
