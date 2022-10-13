// import './App.css';
import Signin from './components/Signin';
import SignUp from './components/SignUp';


function App() {
  return (
    <div className="App">
      <h1>displayed both sign-in and sign-up for my reference</h1>
      <div>
        <Signin/>
      </div>
      <div>
        <SignUp/>
      </div>
    </div>
    
  );   
}

export default App;
