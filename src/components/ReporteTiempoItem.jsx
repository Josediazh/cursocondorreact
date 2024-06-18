
export const ReporteTiempoItem = ({reporte}) => {
    
  return (
    <ul>
        {
            reporte.map( ({id,tarea}) => {
                return (
                    <li key={id}>
                        {tarea}
                    </li>
                )
            } )
        }
    </ul>
  )
}