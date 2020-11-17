import React from 'react'
import { render } from 'react-dom'
import App from './app'
import 'normalize.css'
import { GlobalStyle } from './globalStyles'

render(
    <>
        <GlobalStyle />
        <App />
    </>,
    document.getElementById('root'),
)
