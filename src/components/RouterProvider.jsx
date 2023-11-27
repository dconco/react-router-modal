import React, {
    Children,
    cloneElement,
    createContext,
    useContext,
    useState
} from "react"
import { useBetween } from "use-between"
import animations from './Animate.module.css'

const RouterContext = createContext()

const useRouterPath = () => {
    const [routerPath, setRouterPath] = useState(window.location.pathname)
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
    const { routerPath, setRouterPath } = useBetween(useRouterPath)
    return { routerPath, setRouterPath }
}

/* switch routes depending on the giving path of child props */
const SwitchRoutes = ({ children }) => {
    const { routerPath } = useRouterModal()
    let component = <div />

    Children.forEach(children, child => {
        const path = child.props.path

        // This function here, removes the front & back slashes in the url
        const routerPathFilter = (routerPath) ? routerPath.replace(/^\/+|\/+$/g, '') : routerPath
        const pathFilter = (typeof path != 'object' && path) ? path.replace(/^\/+|\/+$/g, '') : path

        if (typeof path == 'object' && path.includes(routerPath)) {
            component = cloneElement(child)
        }
        else if (routerPathFilter === pathFilter || pathFilter === '*' || !path) {
            component = cloneElement(child)
        }
    })
    return component
}

const RouteModal = ({ path, component, animate }) => {
    if (typeof animate == 'string') {
        let routerAnimate = ['']
        let animateValue = ''

        if (animate !== true && animate !== undefined) {
            routerAnimate = animate.includes('-') ? animate.split('-') : [animate]
        }

        routerAnimate.forEach((val, index) => {
            if (index === 0) {
                animateValue = val
            } else {
                animateValue += val[0].toUpperCase() + val.substring(1, val.length)
            }
        })

        switch (animateValue) {
            case 'routerFade':
                animate = animations.routerFade
                break;
            case 'routerSlideLeft':
                animate = animations.routerSlideLeft
                break;
            case 'routerSlideRight':
                animate = animations.routerSlideRight
                break;
            case 'routerSlideUp':
                animate = animations.routerSlideUp
                break;
            case 'routerSlideDown':
                animate = animations.routerSlideDown
                break;
            case 'routerZoomIn':
                animate = animations.routerZoomIn
                break;
            case 'routerZoomOut':
                animate = animations.routerZoomOut
                break;

            default:
                animate = animations.routerFade
                break;
        }
    }
    else {
        let animateObject = animations.routerFade

        if (animate !== true && animate !== undefined) {
            animateObject = animate
        }

        animate = animateObject()
    }

    return (
        <div key={Math.random()} className={animate}>
            {component}
        </div>
    )
}

const Fade = () => animations.routerFade || 'router-fade'
const SlideLeft = () => animations.routerSlideLeft || 'router-slide-left'
const SlideRight = () => animations.routerSlideRight || 'router-slide-right'
const SlideUp = () => animations.routerSlideUp || 'router-slide-up'
const SlideDown = () => animations.routerSlideDown || 'router-slide-down'
const ZoomIn = () => animations.routerZoomIn || 'router-zoom-in'
const ZoomOut = () => animations.routerZoomOut || 'router-zoom-out'

const Animation = {
    routerFade: () => Fade(),
    routerSlideLeft: () => SlideLeft(),
    routerSlideRight: () => SlideRight(),
    routerSlideUp: () => SlideUp(),
    routerSlideDown: () => SlideDown(),
    routerZoomIn: () => ZoomIn(),
    routerZoomOut: () => ZoomOut()
}

const routerFade = () => Fade()
const routerSlideLeft = () => SlideLeft()
const routerSlideRight = () => SlideRight()
const routerSlideUp = () => SlideUp()
const routerSlideDown = () => SlideDown()
const routerZoomIn = () => ZoomIn()
const routerZoomOut = () => ZoomOut()


export default RouterModalProvider
export {
    useRouterModal,
    useRouter,
    SwitchRoutes,
    RouteModal,
    Animation,
    routerFade,
    routerSlideLeft,
    routerSlideRight,
    routerSlideUp,
    routerSlideDown,
    routerZoomIn,
    routerZoomOut
}