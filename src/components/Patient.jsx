import {useEffect} from 'react'

const Patient = ({patient, setPatient, deletePatients}) => {
    //all required of the component patient
    const { name, owner, email, date, symptom, id } = patient

    //to delete
    const handleDelete = () => {
        const answer = confirm('Are you sure you want to delete?')
        if(answer) {
            deletePatients(id)
        }
    }
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {' '}
            <span className='font-normal normal-case'>{name}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {' '}
            <span className='font-normal normal-case'>{owner}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {' '}
            <span className='font-normal normal-case'>{email}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {' '}
            <span className='font-normal normal-case'>{date}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {' '}
            <span className='font-normal normal-case'>{symptom}</span>
        </p>

        <div className="flex justify-between mt-10">
            <button type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white funt-bold uppercase rounded-lg"
            onClick={() => setPatient(patient)}
            >Editar</button>

            <button type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white funt-bold uppercase rounded-lg"
            onClick={handleDelete}
            >Eliminar</button>
        </div>
  </div>
  )
}

export default Patient