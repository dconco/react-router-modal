import React from 'react'
import { createRoot } from 'react-dom/client'
import Router from './Router'

import './index.css'
import './components/styles/tailwind.css'

const Root = createRoot(document.getElementById('root'))
Root.render(<div className="bg-blue-500 text-white p-4">
    This should have a blue background with white text.
</div>)