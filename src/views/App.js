import logo from './logo.svg';
import './App.scss';
import ListToDo from './ToDo/ListToDo';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple To Do List</h1>
        <ListToDo/>
        <button onClick={() => toast.success("thanh cong la de")} value='Click'/>
      </header>
     
    </div>
  );
}

export default App;
