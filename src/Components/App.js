import "../Styles/App.css";
import React, { useState, Component } from "react";
import TaskCreator from "./TaskCreator";
import TaskViewer from "./TaskViewer";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  state = {
    todos: [],
  };
  addTask = (task) => {
    this.setState((prev) => ({
      todos: [...prev.todos, task],
    }));
  };
  deleteTask = (id) => {
    const list = [...this.state.todos];
    list.splice(id, 1);
    this.setState({
      todos: list,
    });
  };
  statusChange = (id, date) => {
    const list = [...this.state.todos];
    list[id].done = true;
    list[id].dateDone = date;
    this.setState({
      todos: list,
    });
  };
  render() {
    return (
      <div className="App">
        <TaskCreator data={this.addTask} />
        <div className="notDone">
          <p>
            <strong>Zadania nieukończone</strong>
          </p>
          <TaskViewer
            data={this.state.todos}
            delete={this.deleteTask}
            statusChange={this.statusChange}
            status={false}
          />
        </div>
        <div className="Done">
          <p>
            <strong>Zadania ukończone</strong>
          </p>
          <TaskViewer
            data={this.state.todos}
            delete={this.deleteTask}
            statusChange={this.statusChange}
            status={true}
          />
        </div>
      </div>
    );
  }
}
