import React, { useState } from "react";

const AddTodo = (props) => {
  const submit = (e) => {
    e.preventDefault();

    if (!title || !desc) {
      alert(`Title or Description can't be blank`);
    } else {
      props.addTodoItem(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <>
      <form className="mb-5" onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>

        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </>
  );
};

export default AddTodo;
