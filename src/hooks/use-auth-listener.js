import { useState, useContext, useEffect } from 'react'
import { FireBaseContext } from '../context/firebase'

const useAuthListener = () => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('authUser')),
    )
    const { firebase } = useContext(FireBaseContext)
    useEffect(() => {
        const authListener = firebase.auth().onAuthStateChanged(authUser => {
            if (authUser) {
                localStorage.setItem('authStorage', JSON.stringify(authUser))
                setUser(authUser)
            } else {
                localStorage.removeItem('authUser')
                setUser(null)
            }
        })
        return () => {
            authListener()
        }
    })
    return { user }
}
export default useAuthListener
