import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './homePage';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
