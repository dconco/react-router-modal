import React from 'react'
import RouterModalProvider, { useRouterModal } from './components/RouterProvider'

import App from './App'
import Login from './pages/Login'


// Define all your routes here
const Route = () => {
    const { routerPath } = useRouterModal() // get route path 

    switch (routerPath) {
        case '/':
            return <App name={'Dave'} />
        
        case '/login':
            return <Login />
            
        default:
            return <h2>404 | Page not Found</h2>
    }
}

// Render routes to Page
const Router = () => {
    return (
        <>
        { /*<RouterModalProvider>
            <Route />
        </RouterModalProvider>*/ }
        
        <h1>Hello</h1>
        </>
    )
}

export default Router