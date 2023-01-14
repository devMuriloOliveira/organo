
import Banner from './componentes/Banner/Banner'
import CampoTexto from './componentes/CampoTexto'

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome"/>
      <CampoTexto label="Cargo"/>
      <CampoTexto label="Imagem"/>
      <CampoTexto label="Time"/>

    </div>
  )
}

export default App
