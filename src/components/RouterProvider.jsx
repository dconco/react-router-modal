import React, {
    Children,
    cloneElement,
    createContext,
    useContext,
    useEffect,
    useState
} from "react"
import { useBetween } from "use-between"
import animations from './Animate.module.css'

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
    const { routerPath, setRouterPath } = useBetween(useRouterPath)
    return { routerPath, setRouterPath }
}

const SwitchRoutes = ({ children }) => {
    const { routerPath } = useRouterModal()
    let component = <div />

    Children.forEach(children, child => {
        const path = child.props.path

        if (routerPath.includes(path) || !path) {
            component = cloneElement(child)
        }
    })
    return component
}

const RouteModal = ({ path, component, animate }) => {
    let routerAnimate = animate.split('-')
    let animateValue = ''

    routerAnimate.forEach((val, index) => {
        if (index == 0) {
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

    // useEffect(() => {
    return (
        <div className={animate}>
            {component}
        </div >
    )
    // }, [])
}


export default RouterModalProvider
export {
    useRouterModal,
    useRouter,
    SwitchRoutes,
    RouteModal
}