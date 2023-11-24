import React from 'react'
import { useRouter } from './components/RouterProvider'
import './App.css'

const styles = {
    div: {
        margin: 10,
        padding: 30,
        color: 'lightblue',
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
        <>
            <div style={styles.div}>
                <h1 style={styles.h1}>Hello {name}, Welcome to React Router Modal!</h1>
            </div>

            <br />
            <button onClick={ () => setRouterPath('/login') }>Go to Login Page</button>
        </>
    )
}

export default App