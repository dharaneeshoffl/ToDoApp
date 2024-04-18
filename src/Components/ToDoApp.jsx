import React from "react";
import { useState } from "react";
import todoApp from "./ToDoApp.module.css"

export default function ToDoApp() {
  let [task, setTask] = useState("");
  let [tasks, setTasks] = useState([]);
  let [alert, setAlert] = useState(false);
  let [dalert, setDalert] = useState(false);
  let [res, setRes] = useState([]);

  let changeTask = ({ target: { value } }) => {
    setTask(value);
  };
  let addTask = () => {
    setTasks([...tasks, task]);

    setAlert(true);
    setTimeout(() => {
      setTask("");
      setAlert(false);
    }, 2000);
  };
  let deleteTask = (index) => {
    setDalert(true);
    let remainingTasks = tasks.filter((e, i) => {
      setTimeout(() => {
        setDalert(false);
      }, 2000);
      return index !== i;
    });
    setTasks(remainingTasks);
    setRes([tasks.at(index)]);
  };

  return (
    <>
      <div className={todoApp.bod}>
        <div>
          {alert && (
            <h1 className={todoApp.styl}>{task} is Successfuly Added</h1>
          )}
        </div>
        <div>
          {dalert && (
            <h1 className={todoApp.styl}>{res} is Successfuly Deleted</h1>
          )}
        </div>
      </div>
      <section>
        <div className={todoApp.input}>
          <input
            type="text"
            placeholder="Task"
            value={task}
            onChange={changeTask}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <div>
          {tasks.map((e, i) => {
            return (
              <div className={todoApp.tasks} key={i}>
                <span>{e}</span>
                <button
                  onClick={() => {
                    deleteTask(i);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
