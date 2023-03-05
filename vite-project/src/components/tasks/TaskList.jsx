import { tasks } from '../../data/tasks';
import { TaskCard } from './TaskCard';
import './TaskList.css';

// const tasks = null
// const tasks = []

export const TaskList = () => {
  const tasksPending = tasks.filter(task => !task.done);
  if(!tasks?.length){
    return <span>No hay tareas, vuelva mas tarde.</span>
  }
  return (
    <div>
      <h2>Ejercicio Tasks</h2>
      <div className='fondo'>
        <div>
            <h2>Todo App</h2>
            <div>
            {tasks.map((task) => (
            <TaskCard key={task.id} task={task}/>
            ))}
            </div>
            <p>You have {tasksPending.length} pending tasks</p>
        </div>
      </div>
    </div>
 );
};
