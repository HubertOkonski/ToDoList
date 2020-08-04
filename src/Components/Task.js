import React from "react";

const Task = (props) => {
  const getToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const date = `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`;
    return date;
  };
  return (
    <p style={props.priority ? { color: "red" } : { color: "black" }}>
      {props.name} ukończyć przed {props.date}
      <button className="btn btn-danger" onClick={() => props.delete(props.id)}>
        X
      </button>
      {!props.done ? (
        <button
          className="btn btn-success"
          onClick={() => props.status(props.id, getToday())}
        >
          Zrobione
        </button>
      ) : (
        <p id="doneFooter">
          {" "}
          Potwierdzienie zrobienia zadania - {props.dateDone}
        </p>
      )}
    </p>
  );
};

export default Task;
