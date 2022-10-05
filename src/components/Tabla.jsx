import useClima from "../hooks/useClima"


const Tabla = ({d}) => {

    const {datos} = useClima()

    const detallesDatos = (d) =>{
        datos.map( element => {
            if(element._id === d._id){
                return alert(`
                id: ${element._id}
                cityid: ${element.cityid}
                validdateutc: ${element.validdateutc}
                winddirectioncardinal: ${element.winddirectioncardinal}
                probabilityofprecip: ${element.probabilityofprecip}
                relativehumidity: ${element.relativehumidity}
                nombre: ${element.name}
                longitude: ${element.longitude}
                state: ${element.state}
                lastreporttime: ${element.lastreporttime}
                skydescriptionlong: ${element.skydescriptionlong}
                stateabbr: ${element.stateabbr}
                tempc: ${element.tempc}
                latitude: ${element.latitude}
                iconcode: ${element.iconcode}
                windspeedkm: ${element.windspeedkm}
                
                `)
            }
        })
    }


    const formatearFecha = (fecha) =>{
        const nuevaFecha = new Date()
        return nuevaFecha.toLocaleDateString()
    }

    return(
        <>
        <tr>
            <td className="text-center text-xs">
                <button
                type="button"
                className="bg-indigo-500 rounded-md text-white w-full p-1 font-bold "
                onClick={() => detallesDatos (d)}
                >
                    {d._id}
                </button>
            </td>

            <td className="text-center text-xs">
                {d.cityid}
            </td>

            <td className="text-center text-xs">
                {d.name}
            </td>

            <td className="text-center text-xs">
                {d.state}
            </td>

            <td className="text-center text-xs">
                {`${d.probabilityofprecip}%`}
            </td>

            <td className="text-center text-xs">
                {d.relativehumidity}
            </td>

            <td className="text-center text-xs">
                {formatearFecha(d.lastreporttime)}
            </td>

            <td className="text-center text-xs">
                { d.probabilityofprecip > 60 || d.relativehumidity > 50 && 'LLUEVE' }
            </td>



        </tr>
        
        </>
    )

}

export default Tabla