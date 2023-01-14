import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo}) => {
  return(
    <div className='colaborador'>
      <div className='cabecalho'>
        <img src={imagem} alt={nome}/>
      </div>
      <div className='rodape'>
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  )
}

export default Colaborador