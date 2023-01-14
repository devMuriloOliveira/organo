import { useState } from 'react'
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

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')


    const aoSalvar = (evento) => {
      evento.preventDefault()
      console.log('Form foi submetido')
    }

  return(
  
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
      <CampoTexto 
      obrigatorio={true} 
      label="Nome" 
      placeholder="Digite o seu nome"
      valor={nome}
      aoAuterado={valor => setNome(valor)}/>

      <CampoTexto 
      obrigatorio={true} 
      label="Cargo" 
      placeholder="Digite o seu cargo"
      valor={cargo}/>
      <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem"/>
      <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
      <Botao>
        Criar card
      </Botao>
      </form>
    </section>
  )
}

export default Formulario