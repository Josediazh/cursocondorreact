import { useState } from "react"
import {ReporteTiempoItem} from "./ReporteTiempoItem";

const ReporteTiempo = () => {

  const reporteTiempos = [{
    id: 123,
    tarea: 'Curso de react',
    horas: 1
  },
  {
    id: 456,
    tarea: 'Sprint dev',
    horas: 1
  }
]  

  const [reporte, setReporte] = useState(reporteTiempos);
  const [form, setForm] = useState({
    tarea: '',
    horas: 0
  });

  const onChangeForm = ({target}) => {

    const {name,value} = target;

    setForm({
        ...form,
        [name]: value
    });

  }

  const addNewReporte = () => {

    const newTarea = {
        id: 678,
        tarea: form.tarea,
        horas: form.horas
    }

    setReporte([...reporte,newTarea]);

  }


  return (
    <>
        <input type="text" name="tarea" onChange={onChangeForm} value={form.tarea} />
        <input type="text" name="horas" onChange={onChangeForm} value={form.horas} />
        <button onClick={addNewReporte} type="button">Agregar</button>
        <hr />
        <ReporteTiempoItem reporte={reporte}/>
    </>
  )
}

export default ReporteTiempo