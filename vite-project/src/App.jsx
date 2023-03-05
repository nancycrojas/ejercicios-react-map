import { CardList } from './components/cardList/CardList';
import './App.css';
import { TaskList } from './components/tasks/TaskList';

function App() {
  return (
    <div className="App">
      <CardList />
      <TaskList />
    </div>
  )
}

export default App
