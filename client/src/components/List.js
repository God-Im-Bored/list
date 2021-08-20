import React, { Fragment, useState, useEffect } from "react";
import Edit from './Edit'

const List = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    const deletedTodo = await fetch(`http://localhost:9000/todos/${id}`, {
        method: "DELETE"
    })

    setTodos(todos.filter(todo => todo.todo_id !== id))
  }

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:9000/todos");

      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td><Edit todo={todo} /></td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default List;
