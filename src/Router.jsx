import React, { createContext, useContext, useState } from 'react'
import App from './App'
import Login from './pages/Login'

const SessionStorageContext = createContext()

const SessionStorageProvider = ({ children }) => {
    const [sessionStorageValue, setSessionStorageValue] = useState(
        sessionStorage.getItem('current-page') || '/'
    )

    const updateSessionStorage = (key, value) => {
        sessionStorage.setItem(key, value)
        setSessionStorageValue(value)
    }

    return (
        <SessionStorageContext.Provider value={{ sessionStorageValue, updateSessionStorage }}>
            {children}
        </SessionStorageContext.Provider>
    )
}

const useSessionStorage = () => {
    const context = useContext(SessionStorageContext)
    if (!context) {
        throw new Error('useSessionStorage must be used within a SessionStorageProvider')
    }
    return context
}


const Route = () => {
    const { sessionStorageValue, updateSessionStorage } = useSessionStorage()

    switch (sessionStorageValue) {
        case '/':
            return <App name={'Dave'} next={updateSessionStorage} />
        
        case '/login':
            return <Login />
            
        default:
            return <h2>404 | Page not Found</h2>
    }
}

const Router = () => {
    return (
        <SessionStorageProvider>
            <Route />
        </SessionStorageProvider>
    )
}

export default Router