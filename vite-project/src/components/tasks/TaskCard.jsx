import './Task.css';

export const TaskCard = ({ task }) => {
    const { title, done } = task;
  return (
    <div className='fondo-card'>
        <p style={done ? { textDecoration:'line-through' }: {}}>{title}</p>
        <button>🗑</button>
    </div>
    );
};
