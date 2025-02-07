import React, {useState, useEffect} from "react"
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home"
import Axios from 'axios'
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
function App() {

  Axios.defaults.withCredentials = true;


  const [usernameSign, setUsernameSign] = useState("")
  const [passwordSign, setPasswordSign] = useState("")
  const [usernameLog, setUsernameLog] = useState("")
  const [passwordLog, setPasswordLog] = useState("")

  const [loginStatus, setLoginStatus] = useState(false)
  const [sessionData, setSessionData] = useState({username: "x"})


  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) =>{
      if(response.data.loggedIn == true) { 
        setLoginStatus(true)
        setSessionData(response.data.user)
      }
    })
  }, [])



  return (
    <div className="App">

  {loginStatus ? <Home setLoginStatus={setLoginStatus} sessionData={sessionData} setSessionData ={setSessionData}/> : <> <Signup/> <Login setLoginStatus={setLoginStatus} setSessionData={setSessionData} sessionData={sessionData} /> </> }


    

    </div>
  );
}

export default App;
