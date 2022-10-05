import {createContext, useEffect, useState} from "react";
import axios from "axios";

const ClimaContext = createContext()

const ClimaProvider = ({children}) =>{

    const [datos, setDatos] = useState([])

    useEffect(() => {
        const obtenerDatos = async () =>{
            const url = `https://api.datos.gob.mx/v1/condiciones-atmosfericas`
            const {data} = await axios(url)
            setDatos(data.results)
        }
        obtenerDatos()
    }, [])

    return(
        <ClimaContext.Provider
         value={{
            datos
        }}>
            {children}
        </ClimaContext.Provider>
    )
}

export {
    ClimaProvider
}

export default ClimaContext