import logo from './logo.svg';
import './App.css';
import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';

function App() {
  return (
    <div className="container mt-5">
        <h1 className='text-center mb-4'>To-Do Application</h1>
        <TaskInput/>
        <TaskList/>
    </div>
  );
}

export default App;
