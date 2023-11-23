import React, { createContext, useContext, useState } from "react"

const RouterContext = createContext()
const [routerPath, setRouterPath] = useState('/')

const RouterModalProvider = ({ children }) => {
    return (
        <RouterContext.Provider value={{ routerPath }}>
            {children}
        </RouterContext.Provider>
    )
}

const RouterModal = (url) => setRouterPath(url)

const useRouterModal = () => {
    const context = useContext(RouterContext)
    if (!context) {
        throw new Error('useRouterModal must be used within a RouterModalProvider')
    }
    return context
}

export default RouterModalProvider
export { useRouterModal, RouterModal }