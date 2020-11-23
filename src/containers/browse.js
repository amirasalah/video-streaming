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
                <Header.Feature>
                    <Header.FeatureCallOut>
                        Watch Joker Now
                    </Header.FeatureCallOut>
                    <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck
                        seeks connection as he walks the streets of Gotham City.
                        Arthur wears two masks -- the one he paints for his day
                        job as a clown, and the guise he projects in a futile
                        attempt to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    )
}
export default BrowseContainer
