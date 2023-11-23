import React, { createContext, useContext, useState } from "react"

const RouterContext = createContext()
const [routerPath, setRouterPath] = useState('/')

const RouterModalProvider = ({ children }) => {
    return (
        <SessionStorageContext.Provider value={{ routerPath }}>
            {children}
        </SessionStorageContext.Provider>
    )
}

const RouterModal = (url) => setRouterPath(url)

const useRouterStorage = () => {
    const context = useContext(RouterContext)
    if (!context) {
        throw new Error('useRouterStorage must be used within a RouterModalProvider')
    }
    return context
}

export default RouterModalProvider
export { useRouterStorage, RouterModal }