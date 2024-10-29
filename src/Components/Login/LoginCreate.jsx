import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import { USER_POST } from '../../api'
import { UserContext } from '../../UserContext'

function LoginCreate() {

  const {userLogin} = React.useContext(UserContext)

  const userName = useForm()
  const email = useForm('email')
  const password = useForm()

  async function handleSubmit(event) {
    event.preventDefault();
    const {url, options} = USER_POST({
      username: userName.value, 
      email: email.value, 
      password: password.value
    })

    const {response} = await fetch(url, options)
    console.log(response);
    
    if (response.ok) userLogin(userName.value, password.value)

  }


  return (
    <section className='animeLeft'>
     <h1 className='title'>Cadastre-se</h1>
     <form onSubmit={handleSubmit}>
      <Input label="Usuario" type="text" name="username" {...userName}/>
      <Input label="Email" type="text" name="email" {...email}/>
      <Input label="Senha" type="password" name="password" {...password}/>
      <Button>Cadastrar</Button>
     </form>
    </section>
  )
}

export default LoginCreate

