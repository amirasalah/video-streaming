import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { IsUserProtected } from './helpers/is-user-protected'
import { IsUserRedirect } from './helpers/is-user-redirect'

import { Home, Browse, SignIn, SignUp } from './pages'

const App = () => {
    const user = {}
    return (
        <Router>
            <IsUserRedirect
                user={user}
                exact
                loggedInPath={ROUTES.BROWSE}
                path={ROUTES.HOME}
            >
                <Home />
            </IsUserRedirect>
            <IsUserProtected user={user} path={ROUTES.BROWSE}>
                <Browse />
            </IsUserProtected>
            <IsUserRedirect
                user={user}
                loggedInPath={ROUTES.BROWSE}
                path={ROUTES.SIGN_IN}
            >
                <SignIn />
            </IsUserRedirect>
            <IsUserRedirect
                user={user}
                loggedInPath={ROUTES.BROWSE}
                path={ROUTES.SIGN_UP}
            >
                <SignUp />
            </IsUserRedirect>
        </Router>
    )
}
export default App
