import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Main from './Main';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <main>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/main' element={<Main />}/>
    </Routes>
      </main>
    </Router>
    </div>
  );
}

export default App;
