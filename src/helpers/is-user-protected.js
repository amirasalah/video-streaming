import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const IsUserProtected = ({ user, children, ...restProps }) => {
    return (
        <Route
            {...restProps}
            render={({ location }) => {
                if (user) {
                    return children
                }
                if (!user) {
                    return (
                        <Redirect
                            to={{
                                pathname: 'signin',
                                state: { from: location },
                            }}
                        />
                    )
                }
            }}
        />
    )
}
