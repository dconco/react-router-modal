import React from 'react'
import { RouterModal } from './components/RouterProvider'
import './App.css'

/* use RouterModal function to set Path for the router to redirect to */

/* Styles without syled-components */
const styles = {
    div: {
        margin: 10,
        padding: 30,
        color: 'lightblue',
        textAlign: 'center',
        backgroundColor: 'blue'
    },
    h1: {
        color: 'white'
    }
}

function App({ name }) {
    return (
        <>
            <div style={styles.div}>
                <h1 style={styles.h1}>Hello {name}, Welcome to React Router Modal!</h1>
            </div>
            
            <br/>
            <button onClick={ () => RouterModal('/login') }>Go to Login Page</button>
        </>
    )
}

export default App