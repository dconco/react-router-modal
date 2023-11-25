import React from 'react'
import { useRouter } from '../components/RouterProvider'
import '../components/animate.css'

const styles = {
    div: {
        margin: 10,
        padding: 30,
        textAlign: 'center',
        backgroundColor: 'green',
    },
    h1: {
        color: 'white',
    },
}

function Login() {
    const { setRouterPath } = useRouter() // set the route path to redirect to

    return (
        <div animate='router-slide-down'>
            <div style={styles.div}>
                <h1 style={styles.h1}>Welcome Back!</h1>
            </div>

            <br />
            <button onClick={ () => setRouterPath('/') }>Home Page</button>
        </div>
    )
}

export default Login