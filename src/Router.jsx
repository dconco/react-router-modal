import React from 'react'
import RouterModalProvider, { SwitchRoutes, RouteModal } from './components/RouterProvider'

import App from './App'
import Login from './pages/Login'


// Render routes to Page
const Router = () => {
    return (
        <RouterModalProvider>
            <SwitchRoutes>
                <RouteModal path={'/'} component={<App />} />
                <RouteModal path={'/login'} component={<Login />} animate='router-slide-up' />
                <RouteModal component={<h2>404 | Not Found</h2>} />
            </SwitchRoutes>
        </RouterModalProvider>
    )
}

export default Router