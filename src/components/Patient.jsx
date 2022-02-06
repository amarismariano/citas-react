import React from 'react';

const Patient = ({patientsInfo, setPatientInfo, deletePatient}) => {

    const {name, owner, email, rDate, symptom, id} = patientsInfo;
    const deleteHandle = () =>{
        const result = confirm("Deseas eliminar este paciente?");

        if(result){
            deletePatient(id)  
        }
    }
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {""}
            <span className='font-normal normal-case'>{name}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {""}
            <span className='font-normal normal-case'>{owner}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {""}
            <span className='font-normal normal-case'>{email}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de Alta: {""}
            <span className='font-normal normal-case'>{rDate}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {""}
            <span className='font-normal normal-case'>{symptom}</span>
        </p>

        <div className='flex justify-between mt-10'>
            <button 
                type='button'
                className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                onClick={()=> setPatientInfo(patientsInfo)}
            >
                Editar
            </button>
            <button 
                type='button'
                className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
                onClick={deleteHandle}
            >
                Eliminar
            </button>
        </div>
    </div>
    );
};

export default Patient;
