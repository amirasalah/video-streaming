import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from '../components'
import { HeaderContainer } from '../containers'
import { FooterContainer } from '../containers'
import { FireBaseContext } from '../context/firebase'
import * as ROUTES from '../constants/routes'

const SignUp = () => {
    const history = useHistory()
    const { firebase } = React.useContext(FireBaseContext)
    const [emailAddress, setEmailAddress] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [firstName, setFirstName] = React.useState('')
    const [error, setError] = React.useState('')
    const isInvalid = firstName === '' || emailAddress === '' || password === ''

    const handleSignUp = event => {
        event.preventDefault()
        return firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then(res => {
                res.user.updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                })
            })
            .then(() => {
                history.push(ROUTES.BROWSE)
            })
            .catch(error => {
                setFirstName('')
                setEmailAddress('')
                setPassword('')
                setError(error)
            })
    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error.message}</Form.Error>}
                    <Form.Base onSubmit={handleSignUp} method='POST'>
                        <Form.Input
                            placeholder='First name'
                            value={firstName}
                            onChange={({ target }) =>
                                setFirstName(target.value)
                            }
                        />
                        <Form.Input
                            placeholder='Email address'
                            type='email'
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
                        <Form.Submit disabled={isInvalid} type='submit'>
                            Sign Up
                        </Form.Submit>
                        <Form.Text>
                            Already a user?{' '}
                            <Form.Link to='/signin'>Sign in now</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure
                            you're not a bot. Learn more.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer></FooterContainer>
        </>
    )
}
export default SignUp
