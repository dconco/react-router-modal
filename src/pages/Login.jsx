import React from 'react'
import { useRouter, useParam, usePath } from '../components/RouterProvider'

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

    const name = useParam("name")
    alert(usePath())
    

    return (
        <div>
            <div style={styles.div}>
                <h1 style={styles.h1} className='text-2xl font-bold underline'>Welcome Back! {name} gotten from router</h1>
            </div>

            <br />
            <button onClick={() => setRouterPath('/')} className='bg-sky-300 py-1 px-3 font-bold mx-3'>Home Page</button>
        </div>
    )
}

export default Login