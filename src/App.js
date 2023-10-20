import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import Main from './main/main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path='*' element={<Main />}></Route>
      </Routes>
    </>
  );
}

export default App;
