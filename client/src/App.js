import './App.css';
import Login from './Components/Login';
import MainContainer from './Components/MainContainer';
import {Routes, Route} from "react-router-dom";
import Welcome from './Components/Welcome';
import Chatarea from './Components/Chatarea';
import Creategroup from './Components/Creategroup';

function App() {
  return (
    <div className="App">
      {/* <MainContainer/> */}
      {/* <Login/> */}


      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='app' element={<MainContainer/>}>
          <Route path='welcome' element={<Welcome/>}/>
          <Route path='chat' element={<Chatarea/>}/>
          <Route path='groups' element={<Creategroup/>}/>
          <Route path='welcome' element={<Welcome/>}/>
          <Route path='welcome' element={<Welcome/>}/>
          </Route>
      </Routes>


    </div>
  );
}

export default App;
