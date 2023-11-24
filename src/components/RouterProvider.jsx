import React, { createContext, useContext, useEffect, useState } from "react"
import { useBetween } from "use-between"

const RouterContext = createContext()

const useRouterPath = () => {
    const [routerPath, setRouterPath] = useState('/')
    return { routerPath, setRouterPath }
}

const RouterModalProvider = ({ children }) => {
    const { routerPath } = useBetween(useRouterPath)

    return (
        <RouterContext.Provider value={{ routerPath }}>
            {children}
        </RouterContext.Provider>
    )
}

const useRouterModal = () => {
    const context = useContext(RouterContext)
    if (!context) {
        throw new Error('useRouterModal must be used within a RouterModalProvider')
    }
    return context
}

const useRouter = () => {
    const { setRouterPath } = useBetween(useRouterPath)
    return { setRouterPath }
}

// const RouterModal = (url) => setRouterPath(url ? url : '')

export default RouterModalProvider
export { useRouterPath, useRouterModal, useRouter  }