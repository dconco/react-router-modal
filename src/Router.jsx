import React from 'react'
import RouterModalProvider, { SwitchRoutes, RouteModal, routerFade, routerSlideLeft } from './components/RouterProvider'

import App from './App'
import Login from './pages/Login'

// Render routes to Page
const Router = () => {
    return (
        <RouterModalProvider>
            <SwitchRoutes>
                <RouteModal component={<h2>404 | Not Found</h2>} />
                <RouteModal path={['/', '/index']} component={<App name={'Dave'} />} animate={routerFade} />
                <RouteModal path={'/login'} component={<Login />} animate={routerSlideLeft} />
            </SwitchRoutes>
        </RouterModalProvider>
    )
}

export default Router