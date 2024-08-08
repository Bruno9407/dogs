import React from "react"


const UserPost = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [celular, setCelular] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    function handleSubmit(event) {
        event.preventDefault()
        //https://dogsapi.origamid.dev/json/api/user
        fetch("http://localhost:80/login/add_user.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                celular,
                password,
            })

        }).then(response => {
            console.log(response)
            return response.json()
        })        
    }

    return (

    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="username" 
        value={username} 
        onChange={({target}) => setUsername(target.value)}
        />

        <input 
        type="text" 
        placeholder="email" 
        value={email} 
        onChange={({target}) => setEmail(target.value)}
        />

        <input 
        type="text" 
        placeholder="celular" 
        value={celular} 
        onChange={({target}) => setCelular(target.value)}
        />

        <input 
        type="text" 
        placeholder="password" 
        value={password} onChange={({target}) => setPassword(target.value)}
        />

        <button>Enviar</button>
    </form>
  )
}

export default UserPost
