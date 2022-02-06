import React, { useState, useEffect } from 'react';
import Error from './Error';

const Form = ({ patientsInfo, setPatientsInfo, patientInfo, setPatientInfo }) => {

    const [name, setName] = useState("");
    const [owner, setOwner] = useState("");
    const [email, setEmail] = useState("");
    const [rDate, setrDate] = useState("");
    const [symptom, setSymptom] = useState("");

    const [error, setError] = useState(false);

    const idGenerator = () => {
        const random = Math.random().toString(36).substr(2);
        const date = Date.now().toString(36)
        
        return random + date 
    }

    useEffect(() => {
        if(Object.keys(patientInfo).length > 0){
            setName(patientInfo.name)
            setOwner(patientInfo.owner)
            setEmail(patientInfo.email)
            setrDate(patientInfo.rDate)
            setSymptom(patientInfo.symptom)
        }
    }, [patientInfo]);
    

    const handleSubmit = (e) =>{
        e.preventDefault();

        // Validacion del formulario
        if( [name, owner, email, rDate, symptom].includes("") ){
            setError(true)
            return;
        } 

        setError(false)

        //Objeto de paciente

        const objectPatient = {
            name,
            owner,
            email,
            rDate, // Release Date
            symptom
        }

        if(patientInfo.id){
            // Editando el registro
            objectPatient.id = patientInfo.id

            const updatedPatients = patientsInfo.map( patientState => 
                patientState.id === patientInfo.id ? objectPatient : patientState)

            setPatientsInfo(updatedPatients)
            setPatientInfo({})

        } else{
            // Nuevo registro
            objectPatient.id = idGenerator() // Generador de ID
            setPatientsInfo([...patientsInfo, objectPatient])

        }


        // Reiniciar formulario
        setName("")
        setOwner("")
        setEmail("")
        setrDate("")
        setSymptom("")
    }

  return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>
            <p className='text-lg mt-5 text-center mb-10'>
                Añade Pacientes y {""}
                <span className='text-indigo-600 font-bold'>Administralos</span>
            </p>
        
            <form  onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5'>
              {error && <Error message="Todos los campos son obligatorios"/>}
                <div className='mb-5'> 
                    <label htmlFor='mascota' className='block text-gry-700 uppercase font-bold'>
                        Nombre Mascota
                    </label>
                    <input 
                        id='mascota'
                        type="text"
                        placeholder='Nombre de la Mascota'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={name}
                        onChange={(e) => { setName(e.target.value)}}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='propietario' className='block text-gry-700 uppercase font-bold'>
                        Nombre Propietario
                    </label>
                    <input 
                        id='propietario'
                        type="text"
                        placeholder='Nombre del Propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={owner}
                        onChange={(e) => { setOwner(e.target.value)}}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='email' className='block text-gry-700 uppercase font-bold'>
                        Email
                    </label>
                    <input 
                        id='email'
                        type="emil"
                        placeholder='Email Contacto Propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value)}}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='alta' className='block text-gry-700 uppercase font-bold'>
                        Alta
                    </label>
                    <input 
                        id='alta'
                        type="date"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={rDate}
                        onChange={(e) => { setrDate(e.target.value)}}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='sintomas' className='block text-gry-700 uppercase font-bold'>
                        Síntomas
                    </label>
                    <textarea 
                        id='sintomas'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        placeholder='Describe los síntomas'
                        value={symptom}
                        onChange={(e) => { setSymptom(e.target.value)}}
                        
                    />
                </div>

                <input 
                    type="submit"
                    className='bg-indigo-600 w-full p-3 text-white uppercase font-bold 
                        hover:bg-indigo-700 cursor-pointer transition-all'
                    value={patientInfo.id ? "Editar Paciente" : "Agregar Paciente"}
                />
            </form>
        </div>
    );
};

export default Form;
