import React from "react";
const TodoListItem = (props) => {
  return (
    <>
      <h3 className="my-3">To Do List</h3>

      {props.todos.length === 0
        ? "Nothing to do  ,Add your Todo"
        : props.todos.map((todo) => {
            return (
              <>
                <div key={todo.sno} className="card my-3">
                  <div className="card-body">
                    <h5 className="card-title">
                      Id: {todo.sno}, {todo.title}
                    </h5>
                    <p className="card-text"> {todo.desc}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        props.onDelete(todo);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            );
          })}
    </>
  );
};

export default TodoListItem;
