import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            navigate("/login");
        })
    }
  return (
    <button
    className='inline-bock px-4 m-2 duration-200 hover:bg-[#86A789] rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn