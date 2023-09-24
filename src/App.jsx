import { useState, useEffect } from "react"
import { Form } from "./components/Form"
import {PatientsList } from "./components/patientsList"
import Header from "./components/header"
function App() {

  const [ patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) ?? []);
  const [ patient, setPatient] = useState({});

  const patientsLs = JSON.parse(localStorage.getItem('patients')) ?? []
  console.log(patientsLs)
  useEffect(() => {
    //for save info in localStorage
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients])
  
  const deletePatients = (id) => {
      const patientsUpdate = patients.filter(patient => patient.id !== id);
      setPatients(patientsUpdate)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header
   
      />

      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}

        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          deletePatients={deletePatients}
        />
      </div>

    </div>  
  )
}

export default App
