import React, { Component } from "react";
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
  };

  deleteTodo = (id) => {
    const allTodos = this.state.todos;

    allTodos.splice(id, 1);
    this.setState({
      todos: allTodos,
    });
  };

  render() {
    const { inputValue, todos } = this.state;

    return (
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
    );
  }
}

export default TodoApp;
