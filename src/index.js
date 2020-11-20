import React from 'react'
import { render } from 'react-dom'
import App from './app'
import 'normalize.css'
import { GlobalStyle } from './globalStyles'
import { firebase } from './lib/firebase.prod'
import { FireBaseContext } from './context/firebase'

render(
    <>
        <FireBaseContext.Provider value={{ firebase }}>
            <GlobalStyle />
            <App />
        </FireBaseContext.Provider>
    </>,
    document.getElementById('root'),
)
