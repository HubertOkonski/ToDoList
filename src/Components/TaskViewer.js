import React from "react";
import Task from "./Task";
function TaskViewer(props) {
  return (
    <div>
      {props.data.map((task, index) => {
        if (task.done === props.status)
          return (
            <Task
              key={index}
              id={index}
              name={task.name}
              date={task.date}
              done={task.done}
              dateDone={task.dateDone}
              priority={task.priority}
              delete={props.delete}
              status={props.statusChange}
            />
          );
        else return null;
      })}
    </div>
  );
}

export default TaskViewer;
