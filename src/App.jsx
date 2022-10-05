import Listado from "./components/Listado"
import { ClimaProvider } from "./context/ClimaProvider"


function App() {

  return (
    <ClimaProvider>
      <Listado />
    </ClimaProvider>
  )
}

export default App
