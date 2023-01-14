import './Colaborador.css'

const Colaborador = (props) => {
  return(
    <div className='colaborador'>
      <div className='cabecalho'>
        <img src='http://github.com/devMuriloOliveira.png' alt='Murilo Oliveira'/>
      </div>
      <div className='rodape'>
        <h4>{props.nome}</h4>
        <h5>Desenvolvedor</h5>
      </div>
    </div>
  )
}

export default Colaborador