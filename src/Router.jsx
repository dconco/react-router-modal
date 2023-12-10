import React from 'react'
import RouterModalProvider, { SwitchRoutes } from './components/RouterProvider'
import RouteModal, { routerFade, routerSlideLeft } from './components/RouterModal'

import App from './App'
import Login from './pages/Login'

const NotFound = (
    <>
        <h2 className='text-3xl font-bold underline text-white text-center'>404 | Not Found</h2>
        <br />
        <a href='/' className='text-white'>Go back Home</a>
    </>
)

// Render routes to Page
const Router = () => {
    /**
     * 404 Page
     * 404 page should always be at the first before other outes for a good switching 
     * 404 page path is not needed or path should be empty or only *
     */

    return (
        <RouterModalProvider>
            <SwitchRoutes>
                <RouteModal component={NotFound} />

                {/* you can define multiple routes for a component by using array with lists of urls */}
                <RouteModal path={['/', '/index']} component={<App name={'Dave'} />} animate={routerFade} />
                <RouteModal path={'/login'} component={<Login />} animate={routerSlideLeft} />
                <RouteModal path={'/login/:id'} component={<Login />} animate={routerSlideLeft} />
            </SwitchRoutes>
        </RouterModalProvider>
    )
}

export default Router