import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/todolist" element={<ToDoList />} />
      </Routes>
    </div>
  );
}

export default App;
