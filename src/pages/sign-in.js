import React from 'react'
import { Form } from '../components'
import { HeaderContainer } from '../containers'
import { FooterContainer } from '../containers'

const SignIn = () => {
    const [emailAddress, setEmailAddress] = React.useState('')
    const [password, setPassword] = React.useState('')
    // const [error, setError] = React.useState('')
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    <Form.Base method='POST'>
                        <Form.Input
                            placeholder='Email address'
                            value={emailAddress}
                            onChange={({ target }) =>
                                setEmailAddress(target.value)
                            }
                        />
                        <Form.Input
                            type='password'
                            value={password}
                            autoComplete='off'
                            placeholder='Password'
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit
                            // disabled={isInvalid}
                            type='submit'
                            data-testid='sign-in'
                        >
                            Sign In
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix?{' '}
                        <Form.Link to='/signup'>Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer></FooterContainer>
        </>
    )
}
export default SignIn
