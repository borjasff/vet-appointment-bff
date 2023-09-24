import Patient from './Patient'

export const PatientsList = ({patients, setPatient, deletePatients }) => {


  return (
    <>
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll"> {/* force one h and one scroll into the Patients list*/}

      {patients && patients.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>Administra tus {' '}<span className='text-indigo-600 font-bold'> Pacientes y Citas</span></p>    
          
          { patients.map( patient => {

        return (
              <Patient
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
                deletePatients={deletePatients}
              />
            )
          })}
        </>
      ) : (
        <>
            <h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>Comienza agregando pacientes {' '}<span className='text-indigo-600 font-bold'>  y aparecerán aquí</span></p>    
        </>
      )}
    
      </div>
    </>
  )
}
