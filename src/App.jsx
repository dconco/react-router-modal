import React from 'react'
import { useRouter } from './components/RouterProvider'
import './App.css'
import './components/styles/tailwind.css'

const styles = {
    div: {
        margin: 10,
        padding: 30,
        textAlign: 'center',
        backgroundColor: 'blue',
    },
    h1: {
        color: 'white',
    },
}

function App({ name }) {
    const { setRouterPath } = useRouter() // set the route path to redirect to

    return (
        <div className="container mx-auto p-4">
            <span className="text-4xl font-bold mb-4">My Tailwind CSS React App</span>
            {/* Add your components and content here */}
        </div>
    )
}

export default App