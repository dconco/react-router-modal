import React from 'react'
import RouterModalProvider, { useRouterModal } from './components/RouterProvider'

import App from './App'
import Login from './pages/Login'


/**
 * The `Route` function returns different components based on the value of `routerPath`.
 * @returns The function `Route` returns a React component based on the value of `routerPath`. If
 * `routerPath` is `'/'`, it returns the `App` component`. 
 * If `routerPath` is `'/login'`, it returns the `Login` component. Otherwise, it returns a 404 Page
 * 
 * Define all your routes.
*/
const Route = () => {
    const { routerPath } = useRouterModal()

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
        <RouterModalProvider>
            <Route />
        </RouterModalProvider>
    )
}

export default Router