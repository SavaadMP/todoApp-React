import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./TodoApp.css";

class TodoApp extends Component {
  state = {
    inputValue: "",
    todos: [],
  };

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  storeTodoos = () => {
    const { inputValue } = this.state;
    const allTodos = this.state.todos;

    allTodos.push(inputValue);
    this.setState({
      todos: allTodos,
      inputValue: "",
    });

    toast.success("Todo Added 👏", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  deleteTodo = (id) => {
    const allTodos = this.state.todos;

    allTodos.splice(id, 1);
    this.setState({
      todos: allTodos,
    });

    toast.info("Todo Deleted!! 👋", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  render() {
    const { inputValue, todos } = this.state;

    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="todoContainer">
          <h1>Todo App</h1>

          <div className="todoInput">
            <input
              type="text"
              placeholder="Enter Todosss..."
              value={inputValue}
              onChange={this.handleChange}
            ></input>
            <button onClick={this.storeTodoos}>
              <i className="bx bx-plus"></i>
            </button>
          </div>

          <div className="todooss">
            <ul>
              {todos.map((data, index) => {
                return (
                  <div key={index}>
                    <li>{data}</li>
                    <i
                      className="bx bxs-trash"
                      onClick={() => this.deleteTodo(index)}
                    ></i>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default TodoApp;
