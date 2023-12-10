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

const useParam = (param) => {
    const { routerPath } = useRouter()
    
    if (!param) return 'Please specify a paramental'
    
    const rx = new RegExp(`[?, ]${param}=([^,]+)`)
    const getparam = routerPath.match(rx)
    
    return getparam ? getparam[1] : null;
}

const usePath = () => {
    const { routerPath } = useRouter()
    
    return routerPath.split('/')[2] ? routerPath.split('/')[2] : null
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
               
                // check if the path contain id and match the requested path then render it else
                if (val && val.includes(':') && routerPathWithParam.includes('/')) {
                    if ( val.split('/')[0] === routerPathWithParam.split('/')[0]) {
                        component = cloneElement(child)
                    }
                }
                else if (val === routerPathWithParam) {
                    component = cloneElement(child)
                }
            })
        }
        else {
            // split the ? for params and check if link without params matches the path value
            const routerPathWithParam = (routerPathFilter && routerPathFilter.includes('?')) ? routerPathFilter.split('?', 1)[0] : routerPathFilter
            
            // check if the path contain id and match the requested path then render it else
            if (pathFilter && pathFilter.includes(':') && routerPathWithParam.includes('/')) {
                if (pathFilter.split('/')[0] === routerPathWithParam.split('/')[0]) {
                    component = cloneElement(child)
                    
                    // getting the path is obj
                    // const obj = JSON.parse('{"' + pathFilter.split(':')[1] + '" : "' + routerPathWithParam.split('/')[1] + '"}')
                    // console.log(obj)
                }
            } 
            else if (pathFilter === routerPathWithParam || path === '*' || !path) {
                // check if pathFilter with slashes filter match the given path with filter or param or if it's a 404 page then it renders it, else it will return just an empty <div />
                component = cloneElement(child)
            }
        }
    })

    return component
}


export default RouterModalProvider
export {
    usePath,
    useParam,
    useRouterModal,
    useRouter,
    SwitchRoutes
}