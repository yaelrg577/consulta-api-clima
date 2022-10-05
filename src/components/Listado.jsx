import useClima from "../hooks/useClima"
import Tabla from "./Tabla"

const Listado = () =>{

    const {datos} = useClima()

    return(
        <>
        <h1 className="text-center text-4xl uppercase mt-10 font-bold ">Consultar Clima App</h1>
        <table className=" w-full table-auto mt-5">
            <thead>
                <tr>
                    <th className="p-2 uppercase">Id</th>
                    <th className="p-2 uppercase">Ciudad Id</th>
                    <th className="p-2 uppercase">Nombre</th>
                    <th className="p-2 uppercase">Estado</th>
                    <th className="p-2 uppercase">Probabilidad</th>
                    <th className="p-2 uppercase">Precipitacion</th>
                    <th className="p-2 uppercase">Fecha</th>
                    <th className="p-2 uppercase">LLueve</th>
                </tr>
            </thead>

            <tbody>
                {datos.map(d => (
                    <Tabla 
                    key={d._id}
                    d = {d}
                    />
                ))}
            </tbody>

        </table>
        </>
    )
}

export default Listado