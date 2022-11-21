import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './components/Login';

function App() {
  return (
    <>
      <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;