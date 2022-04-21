import './App.css';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import SignUp from './components/Authentication/SignUp';
import SignIn from './components/Authentication/SignIn';


function App() {
  return (
    <div class='App'>
     
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/dash' element={<Dashboard/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/sign-in' element={<SignIn/>} />
        </Routes>
      
    </div>
  );
}

export default App;
