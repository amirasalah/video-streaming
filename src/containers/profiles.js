import React from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'

const SelectProfileContainer = ({ user }) => {
    return (
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo
                    src='images/logo.svg'
                    to={ROUTES.HOME}
                    alt='Netflix'
                />
            </Header.Frame>
        </Header>
    )
}
export default SelectProfileContainer
