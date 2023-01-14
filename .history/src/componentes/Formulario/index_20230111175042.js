import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () =>{
  
    const times = [
      'Programação',
      'Front-End',
      'Data Science',
      'Devops',
      'UX e Design',
      'Mobile',
      'Inovação e Gestão'
    ]

    const aoSlvar = (evento) => {
      evento.preventDefault()
      console.log('Form foi submetido')
    }

  return(
  
    <section className='formulario'>
      <form onSubmit={}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
      <CampoTexto label="Nome" placeholder="Digite o seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite o seu cargo"/>
      <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem"/>
      <ListaSuspensa label="Time" itens={times}/>
      <Botao>
        Criar card
      </Botao>
      </form>
    </section>
  )
}

export default Formulario