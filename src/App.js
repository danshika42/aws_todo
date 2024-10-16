import './App.css';
import ToDoList from './components/ToDoList';
import AddItem from './components/AddItem';


function App() {
  return (
    <div className="App">
      <nav className='bg-slate-800'>
        <ul className='flex justify-between items-center w-[80%] m-auto text-white h-14 text-xl'>
          <li>Home</li>
          <li>ToDo App</li>
        </ul>
      </nav>
      <div className='mt-6 ml-6 flex items-start flex-col'>
        <AddItem/>
        <ToDoList/>
      </div>
    </div>
  );
}

export default App;
