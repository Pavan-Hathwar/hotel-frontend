// import './App.css';
import Signin from './components/Signin';
import SignUp from './components/SignUp';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/'element={<Signin/>}/>
            <Route path='/signup'element={<SignUp/>}/>
          </Routes>
      </BrowserRouter>
      
      
    </div>
    
  );   
}

export default App;
