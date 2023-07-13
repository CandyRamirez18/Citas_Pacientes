
import Pacientes from "./Pacientes"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

   return (
    <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
             Administra tus {""}
          <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          { pacientes.map( pacientes => (
          <Pacientes
            key={pacientes.id}
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        ))}
        </>
         ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
             Comienza agregando tus pacientes {""}
          <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
          
        </>
          )}

           
    </div>
  )
}

export default ListadoPacientes 