import React from 'react'
import { OptForm } from '../components'
import { FaqsContainer } from '../containers'
import { FooterContainer } from '../containers'
import { HeaderContainer } from '../containers'
import { JumbotronContainer } from '../containers'

const Home = () => {
    return (
        <>
            <HeaderContainer>
                <OptForm />
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
export default Home
