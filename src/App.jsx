import React, { useState } from 'react'
import { Text } from './components/component.style'
import './index.css'


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
    const [num, setNum] = useState(0)

    const Exec = (arg) => {
        setNum(num + arg)
        window.alert(`You clicked the button ${num} times`)
    }
    
    /* Return JSX output to DOM */
    return (
        <>
            <div style={styles.div}>
                <h1 style={styles.h1}>Hello {name}, Welcome to BetLightening Tips!</h1>
            </div>
            
            <br/>
            <button onClick={() => Exec(1)}>Click Me: {num}</button>
            <br />
            <br />
            <Text color='yellow'>This is a footer nav designed with React Styled-Component</Text>
        </>
    )
}

export default App