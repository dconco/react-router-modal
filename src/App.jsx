import React from 'react'
import { usePath, useRouter, useParam } from './components/RouterProvider'
import './App.css'

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
    alert(usePath())
    
    return (
        <div>
            <div style={styles.div}>
                <h1 style={styles.h1} className='text-3xl font-bold underline'>Hello {name}, Welcome to React Router Modal Site</h1>
                <br />
                <h2 style={{ color: 'wheat' }}>Nice website</h2>
            </div>

            <br />
            <button onClick={() => setRouterPath('/login/1/?name="davemm", age=100')} className='bg-sky-300 py-1 px-3 font-bold mx-3'>Go to Login Page</button>
            <button onClick={() => setRouterPath('/login/100')} className='bg-sky-300 py-1 px-3 font-bold mx-3'>Go to Login Page</button>
        </div>
    )
}

export default App