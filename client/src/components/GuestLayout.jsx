import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

function GuestLayout() {
    const { token } = useStateContext()

    // redirect the user if authenticated
    if (token) {
        return <Navigate to="/users" />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default GuestLayout