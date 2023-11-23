import React from 'react'
import { createRoot } from 'react-dom/client'
import Router from './Router'

import './index.css'

const Root = createRoot(document.getElementById('root'))
Root.render(<Router />)