import './CampoTexto.css'

const CampoTexto = (props) =>{
 
let valor = 'piroca'

  const aiDigitado = (evento) =>{
  valor = (evento.target.value)
  console.log(valor)
}

  return(
    <div className="campo-texto">
      <label>{props.label}</label>
      <input value={valor} onChange={aiDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
    </div>
  )
}

export default CampoTexto