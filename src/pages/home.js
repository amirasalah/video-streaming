import React from 'react'
import { OptForm } from '../components'
import { Feature } from '../components'
import { FaqsContainer } from '../containers'
import { FooterContainer } from '../containers'
import { HeaderContainer } from '../containers'
import { JumbotronContainer } from '../containers'

const Home = () => {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited films, TV programmes and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel at any time.
                    </Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder='Email Address'></OptForm.Input>
                        <OptForm.Button>Try it Now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>
                            Ready to watch? Enter your email to create or
                            restart your membership
                        </OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
export default Home
