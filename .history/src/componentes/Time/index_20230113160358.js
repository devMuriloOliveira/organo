import './Time.css'

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria}
  return(
    <section className='time' style={{ backgroundColor: props.corSecundaria}}>
      <h3>{props.nome}</h3>
    </section>
  )
}

export default Time