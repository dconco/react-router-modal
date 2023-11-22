import React from 'react'
import { createRoot } from 'react-dom/client'

// import custom external files
import App from './App'
import './App.css'

const Root = createRoot(document.getElementById('root'))
Root.render(<App name={'Dave'} />)