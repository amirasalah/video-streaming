import React from 'react'
import SelectProfileContainer from './profiles'
import { FireBaseContext } from '../context/firebase'
import { Loading } from '../components'
import { Header } from '../components'

const BrowseContainer = ({ slides }) => {
    const [profile, setProfile] = React.useState({})
    const [loading, setLoading] = React.useState(true)
    const { firebase } = React.useContext(FireBaseContext)
    const user = firebase.auth().currentUser || {}

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName])

    return profile.displayName ? (
        <>
            {loading ? (
                <Loading src={user.photoURL} />
            ) : (
                <Loading.ReleaseBody />
            )}
            <Header src='joker1'>
                <p>Hello!!</p>
            </Header>
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    )
}
export default BrowseContainer
