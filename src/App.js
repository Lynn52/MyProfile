import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import Main from './main/main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='*' element={<Main />}></Route>
      </Routes>
    </>
  );
}

export default App;
