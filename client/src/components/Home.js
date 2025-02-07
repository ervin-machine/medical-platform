import React, {useState, useEffect} from 'react'


import Navbar from "./Navbar"
import Sidebar from "./Sidebar"


function Home({sessionData, setSessionData, setLoginStatus}) {


    const [patientInfo, setPatientInfo] = useState({
        first_name : "",
        last_name: "",
        father_name: "",
        jmbg: "",
        phone_number: "",
        adress: "",
        birth: "",
        profession: ""
      })


    return (
        <div>
            {patientInfo.first_name}
            <Navbar setLoginStatus={setLoginStatus}  sessionData={sessionData} patientInfo={patientInfo} setSessionData={setSessionData} />
            <Sidebar sessionData={sessionData} setPatientInfo={setPatientInfo} patientInfo={patientInfo} />
        
        </div>
    )
}

export default Home
