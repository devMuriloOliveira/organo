import './CampoTexto.css'

const CampoTexto = (props) =>{
 
const aiDigitado = () =>{
  
}

  return(
    <div className="campo-texto">
      <label>{props.label}</label>
      <input onChange={aiDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
    </div>
  )
}

export default CampoTexto