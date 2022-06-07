import { AiOutlineDelete } from "react-icons/ai"
import { Task } from "../interfaces/Task"

interface Props {
  task: Task
  deleteTask: (id: number) => void
}

export const TaskCard = ({task, deleteTask}: Props) => {

  const handleDelete = (id: number) => {
    deleteTask(id)
  }

  return (
    <div className="card card-body bg-secondary rounded-0 text-dark">
      <h2 className="">{task.title}</h2>
      <p>{task.id}</p>
      <p>{task.description}</p>
      <p>{task.completed}</p>
      <button className="btn btn-danger" onClick={() => task.id && handleDelete(task.id)}>Delete <AiOutlineDelete /></button>
    </div>
  )
}
