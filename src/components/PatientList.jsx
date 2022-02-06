import React from 'react';
import Patient from './Patient';

const PatientList = ({patientsInfo, setPatientInfo, deletePatient}) => {

  return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
            {patientsInfo && patientsInfo.length ? (
                <>
                    <h2 className='font-black text-3xl text-center'>Listado de pacientes</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                        Administra tus {""}
                        <span className='text-indigo-600 font-bold'> Pacientes y Citas</span>
                    </p>

                    {patientsInfo.map((patientsInfo)=>{
                        return (
                            <Patient 
                                 key={patientsInfo.id}
                                 patientsInfo={patientsInfo}
                                 setPatientInfo={setPatientInfo}
                                 deletePatient={deletePatient}
                            />
                        )
                    })}
                </>
            ) : (
                <>
                    <h2 className='font-black text-3xl text-center'>Listado de pacientes</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                        Comienza Agregando Pacientes {""}
                        <span className='text-indigo-600 font-bold'> Y Aparecerán en este lugar</span>
                    </p>
                </>
            )}
            

            
        </div>
    );
};

export default PatientList;
