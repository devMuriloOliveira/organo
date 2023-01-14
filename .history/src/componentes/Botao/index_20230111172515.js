import './Botao.css'

const Botao = (props) =>{
  return(
      <button className='botao'>
        {props.childre}
      </button>
  )
}

export default Botao