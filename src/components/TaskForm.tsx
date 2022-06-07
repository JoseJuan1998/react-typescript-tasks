import { ChangeEvent, FormEvent, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Task } from '../interfaces/Task'


type EventChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Props {
  newTask: (task: Task) => void
}

const initialState = {
  title: '',
  description: ''
}

export const TaskForm = ({newTask}: Props) => {
  const [task, setTask] = useState<Task>(initialState);

  const handleOnChange = ({ target: { name, value } }: EventChange) => {
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    newTask(task)
    setTask(initialState)
  }

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add Task</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          className="form-control mb-3 rounded-0 border-0"
          onChange={handleOnChange}
          value={task.title}
        />

        <textarea
          name="description"
          rows={2}
          className="form-control mb-3 rounded-0 border-0"
          placeholder="Write a description"
          onChange={handleOnChange}
          value={task.description}
        ></textarea>
        <button className="btn btn-primary">
          Save <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
};
