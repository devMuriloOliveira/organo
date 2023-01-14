import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) =>{
 
  //let valor = ''

  const [valor, setValor] = useState('') 

  const aiDigitado = (evento) =>{
  setValor(evento.target.value)
  console.log(valor)
}

  return(
    <div className="campo-texto">
      <label>{props.label}</label>
      <input value={props.valor} onChange={aiDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
    </div>
  )
}

export default CampoTexto