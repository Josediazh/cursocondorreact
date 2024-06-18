import { useState } from "react"

export const AddTaks = ({addNewTask}) => {

  const [form, setForm] = useState({
    task: ''
  });

  const onChangeForm = ({target}) => {

    const {name,value} = target;

    setForm({
        ...form,
        [name]: value
    });

  }


  const onNewTask = ()  => {
    addNewTask( form.task );
  }

  return (
    <form action="">
        <input type="text" name="task" onChange={onChangeForm} value={form.task}  />
        <button type="button" onClick={ onNewTask }>Agregar tarea</button>
    </form>
  )
}