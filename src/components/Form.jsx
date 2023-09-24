import {useState, useEffect} from 'react'
import Error from './Error';


export const Form = ({patients, setPatients, patient, setPatient}) => {

  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptom, setSymptom] = useState('');

  const[error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(patient).length > 0){
      setName(patient.name)
      setOwner(patient.owner)
      setEmail(patient.email)
      setDate(patient.date)
      setSymptom(patient.symptom)
    }

  }, [patient])



  const generateId = () => {
    const random = Math.random().toString(36).slice(2);
    const date = Date.now().toString(36);

    return random + date
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation form
    if([name, owner, email, date, symptom].includes('')){
      console.log('campo vacio')
      setError(true)
      return;
    } 
    setError(false)

    //object of patients
    const objectPatient = {
      name, 
      owner, 
      email, 
      date, 
      symptom
    }
    //if exists patient edit that
    if(patient.id){
      //edit register
      //id of the patient is the same of the objectPatient
      objectPatient.id = patient.id
      // iterate on patients,when the id is the same, replace the object or return the object in the state
      const patientUpdate = patients.map(patientState => patientState.id === patient.id ? objectPatient : patientState)

      //update
      setPatients(patientUpdate)
      setPatient({})
    } else{
      //new register with new id
      objectPatient.id = generateId()
    setPatients([...patients,  objectPatient]);
    }
      //console.log(objectPatients)

    //reset form
    setName('');
    setOwner('');
    setEmail('');
    setDate('');
    setSymptom('');

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {' '}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>
      <form onSubmit={handleSubmit} /*conecct once function with a event*/
      action="" className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>

        {error && <Error><p>Todos los campos son obligatorios</p></Error> //error message
         }

        <div className='mb-5'>
          <label htmlFor="pet" className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
          <input  type="text" id='pet' placeholder='Nombre de la mascota' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          value={name} onChange={(e) => setName(e.target.value) }/*or in one line*/
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="owner" className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
          <input  type="text" id='owner' placeholder='Nombre del propietario' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          value={owner} onChange={(e) => setOwner(e.target.value) }/*or in one line*/
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email</label>
          <input  type="email" id='email' placeholder='Email contacto' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          value={email} onChange={(e) => setEmail(e.target.value) }/*or in one line*/
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="discharge" className='block text-gray-700 uppercase font-bold'>Alta</label>
          <input  type="date" id='discharge' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          value={date} onChange={(e) => setDate(e.target.value) }/*or in one line*/
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="symptom" className='block text-gray-700 uppercase font-bold'>Síntomas</label>
          <textarea className='block text-gray-700 uppercase font-bold' placeholder="Descripción de síntomas" id="symptom" cols="30" rows="10"
          value={symptom} onChange={(e) => setSymptom(e.target.value) }/*or in one line*/
          ></textarea>
        </div>
        <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' value={ patient.id ? 'Editar Paciente' : 'Agregar Paciente'}/>
      </form>
    </div>
  )
}
