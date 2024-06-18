
const TaskItem = ({task}) => {
  return (
    <ul>
        {
            task.map( ({id,title}) => {
                return (
                    <li key={id}>
                        <span>{title}</span>
                    </li>
                )
            } )
        }
    </ul>
)}

export default TaskItem