import React, { Component } from "react";

export class TaskCreator extends Component {
  getMinDay = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const date = `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`;
    return date;
  };
  state = {
    name: "",
    date: this.getMinDay(),
    priority: false,
    done: false,
    dateDone: "",
  };
  today = new Date();
  clearData = () => {
    this.setState({
      name: "",
      date: this.getMinDay(),
      priority: false,
      done: false,
    });
    console.log(this.state);
  };
  handleDateChange = (e) => {
    this.setState({
      date: e.target.value,
    });
  };
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handlePriorityChange = (e) => {
    this.setState((prev) => ({
      priority: !prev.priority,
    }));
  };

  render() {
    return (
      <div className="container">
        <div className="form-group">
          <label htmlFor="taskToDo">Co zrobić </label>
          <input
            className="form-control"
            id="taskToDo"
            type="text"
            onChange={this.handleNameChange}
            value={this.state.name}
          />
          <br />
          <label htmlFor="taskDate"> Do kiedy </label>
          <input
            id="taskDate"
            className="form-control"
            type="date"
            onChange={this.handleDateChange}
            value={this.state.date}
            min={this.getMinDay()}
          />
          <div className="box">
            <label htmlFor="priorityConfirmation">Priorytet</label>
            <input
              id="priorityConfirmation"
              type="checkbox"
              onChange={this.handlePriorityChange}
              checked={this.state.priority}
            />
          </div>
          <br />
          <button
            className="btn btn-primary"
            onClick={() => {
              this.clearData();
              let copy = Object.assign({}, this.state);
              this.props.data(copy);
            }}
          >
            Dodaj
          </button>
          <div className="task-list"></div>
        </div>
      </div>
    );
  }
}

export default TaskCreator;
