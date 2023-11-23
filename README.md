import React, { createContext, useContext, useEffect, useState } from 'react'
import App from './App'
import Login from './pages/Login'

const Router = () => {
    const [page, setPage] = useState('/')
    
    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.storageArea === sessionStorage) {
                const updatedValue = sessionStorage.getItem('current-page')
                setPage(updatedValue)
            }
        }

        window.addEventListener('storage', handleStorageChange)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }
    }, [])

    useEffect(() => {
        sessionStorage.setItem('current-page', '/login')
    }, [])

    
    const Route = () => {
        switch (page) {
            case '/':
                return <App name={'Dave'} />
            
            case '/login':
                return <Login />
                
                default:
                    return <h2>404 | Page not Found</h2>
        }
    }

    return <Route />
}

export default Router