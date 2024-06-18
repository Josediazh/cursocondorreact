import { useState } from "react";
import TaskItem from "./TaskItem";
import { AddTaks } from "./AddTaks";


export const Task = () => {
  
  const initialTask = [
    {
        id:1,
        title: 'Curso de react'
    },
    {
        id:2,
        title: 'Creacion de aplicativo apex'
    },
    {
        id:3,
        title: 'Integraciones OIC'
    }
  ];  

  const [task, setTask] = useState(initialTask);

  const addNewTask = (newtask) => {

    const payload = {
        id:4,
        title: newtask
    }

    setTask([
        ...task,
        payload
     ])
  }

  return (
    <>
        <h1>Repotes de tiempo</h1>
        < AddTaks addNewTask={addNewTask} />
        <ul>
            < TaskItem task={task} />
        </ul>
    </>
  )
}