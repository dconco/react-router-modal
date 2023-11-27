import React from 'react'
import { createRoot } from 'react-dom/client'
import Router from './Router'
import reportWebVitals from './reportWebVitals';

import './index.css'
import './components/styles/tailwind.css'

const Root = createRoot(document.getElementById('root'))
Root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
