import React ,{useState} from 'react'
import Login from './Login'
import Registration from './Registration'

const Parent = () => {
    let [page,setPage] = useState('Login');
  return (
    <>
    {page === 'login' ? (
        <Login switchToRegister={() => setPage('registration')} />
      ) : (
        <Registration switchToLogin={() => setPage('login')} />
      )}
    </>
  )
}

export default Parent