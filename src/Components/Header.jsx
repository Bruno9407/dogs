import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Dogs from '../Assets/dogs.svg'
import { UserContext } from '../UserContext'

function Header() {

  const {data, userLogout} = React.useContext(UserContext)

  return (
    <header className={styles.header}>
      <nav className={`${styles.header} container`}>
        <Link to='/' aria-label='Dogs - Home'>
        <img className={styles.logo} src={Dogs} alt="Dogs"/>
        </Link>
        {data && <button onClick={userLogout}>sair</button>}
        {data ? (
          <Link className={styles.login} to="/conta">
              {data.nome}
              
          </Link>
        ) : (
          <Link className={styles.login} to='/login'>
            Login/Criar
          </Link>
        )
        }

        
      </nav>
    </header>
  )
}

export default Header

