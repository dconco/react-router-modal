import React, {
    Children,
    cloneElement,
    createContext,
    useContext,
    useState
} from "react"
import { useBetween } from "use-between"


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
    const { routerPath } = useRouter()
    let component = <div />

    Children.forEach(children, child => {
        const path = child.props.path

        // This function here, removes the front & back slashes in the url
        const routerPathFilter = (routerPath) ? routerPath.replace(/^\/+|\/+$/g, '') : routerPath
        const pathFilter = (path && typeof path != 'object') ? path.replace(/^\/+|\/+$/g, '') : path

        // check if path is an object or array, and if routerPath value is included in the array
        if (typeof path == 'object') {
            /** loop through array of urls
             * all val in the forEach, filter first and last parameters
             * split params with ? in routerPath and get the first url and check if they matches the filtered val url
             */
            path.forEach(val => {
                val = val && val.replace(/^\/+|\/+$/g, '')
                const routerPathWithParam = (routerPathFilter && routerPathFilter.includes('?')) ? routerPathFilter.split('?', 1)[0] : routerPathFilter

                if (val === routerPathWithParam) {
                    component = cloneElement(child)
                }
            })
        }
        else {
            // split the ? for params and check if link without params matches the path value
            const routerPathWithParam = (routerPathFilter && routerPathFilter.includes('?')) ? routerPathFilter.split('?', 1)[0] : routerPathFilter

            // check if pathFilter with slashes filter match the given path with filter or param or if it's a 404 page then it renders it, else it will return just an empty <div />
            if (pathFilter === routerPathWithParam || path === '*' || !path) {
                component = cloneElement(child)
            }
        }
    })

    return component
}


export default RouterModalProvider
export {
    useRouterModal,
    useRouter,
    SwitchRoutes
}