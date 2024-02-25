import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { useRecoilState } from 'recoil';
import { $color } from './store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'>
        <Route index element={<HomePage/>} ></Route>
        </Route>
      </Routes>
      <Outlet/>
      </BrowserRouter>
    </div>
  );
}

export default App;
