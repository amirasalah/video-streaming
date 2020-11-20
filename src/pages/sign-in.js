import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from '../components'
import { HeaderContainer } from '../containers'
import { FooterContainer } from '../containers'
import { FireBaseContext } from '../context/firebase'
import * as ROUTES from '../constants/routes'

const SignIn = () => {
    const { firebase } = React.useContext(FireBaseContext)
    const history = useHistory()
    const [emailAddress, setEmailAddress] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')

    const handleSignIn = event => {
        event.preventDefault()
        return firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE)
            })
            .catch(error => {
                setEmailAddress('')
                setPassword('')
                setError(error)
            })
    }

    const isInvalid = emailAddress === '' || password === ''
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error.message}</Form.Error>}
                    <Form.Base onSubmit={handleSignIn} method='POST'>
                        <Form.Input
                            placeholder='Email address'
                            value={emailAddress}
                            type='email'
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
                        <Form.Submit disabled={isInvalid} type='submit'>
                            Sign In
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New to Netflix? {''}
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
