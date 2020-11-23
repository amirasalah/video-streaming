import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { IsUserProtected } from './helpers/is-user-protected'
import { IsUserRedirect } from './helpers/is-user-redirect'
import { useAuthListener } from './hooks'

import { Home, Browse, SignIn, SignUp } from './pages'

const App = () => {
    const { user } = useAuthListener()
    return (
        <Router>
            <Switch>
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
                <IsUserProtected user={user} path={ROUTES.BROWSE}>
                    <Browse />
                </IsUserProtected>
                <IsUserRedirect
                    user={user}
                    loggedInPath={ROUTES.BROWSE}
                    path={ROUTES.HOME}
                >
                    <Home />
                </IsUserRedirect>
            </Switch>
        </Router>
    )
}
export default App
