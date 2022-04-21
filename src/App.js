import './App.css';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div class='App'>
     
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
        </Routes>
      
    </div>
  );
}

export default App;
