import './App.css';
import {Route, Routes, Link, Router} from 'react-router-dom';
import Main from './main/main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='*' element={<Main />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
