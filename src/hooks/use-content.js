import { useState, useContext, useEffect } from 'react'
import { FireBaseContext } from '../context/firebase'

const useContent = target => {
    const [content, setContent] = useState([])
    const { firebase } = useContext(FireBaseContext)

    useEffect(() => {
        firebase
            .firestore()
            .collection(target)
            .get()
            .then(snapshot => {
                const allContent = snapshot.docs.map(contentObj => {
                    return {
                        ...contentObj.data(),
                        docId: contentObj.id,
                    }
                })
                setContent(allContent)
            })
            .catch(err => {
                throw err
            })
    }, [target])
    return {
        [target]: content,
    }
}

export default useContent
