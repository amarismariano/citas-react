import {useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/PatientList"

function App() {

  const [patientsInfo, setPatientsInfo] = useState([])
  const [patientInfo, setPatientInfo] = useState({})

  const deletePatient = id => {
    const newPatients = patientsInfo.filter(patientInfo => patientInfo.id !== id)
    setPatientsInfo(newPatients)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header 
        
      />

      <div className="mt-12 md:flex">
        <Form 
          patientsInfo={patientsInfo}
          setPatientsInfo={setPatientsInfo}
          patientInfo={patientInfo}
          setPatientInfo={setPatientInfo}
        />
        <PatientList 
          patientsInfo={patientsInfo}
          setPatientInfo={setPatientInfo}
          deletePatient={deletePatient}
        />
      </div>
      
    </div>
  )
}

export default App
