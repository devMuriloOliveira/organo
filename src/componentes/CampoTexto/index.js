import './CampoTexto.css'

const CampoTexto = (props) =>{
 
  

  const aiDigitado = (evento) =>{
  props.aoAuterado(evento.target.value) 
}

  return(
    <div className="campo-texto">
      <label>{props.label}</label>
      <input value={props.valor} onChange={aiDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
    </div>
  )
}

export default CampoTexto