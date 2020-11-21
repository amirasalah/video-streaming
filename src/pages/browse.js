import React from 'react'
import { useContent } from '../hooks'

const Browse = () => {
    const { films } = useContent('films')
    const { series } = useContent('series')

    console.log(films)
    return <div>Browse</div>
}
export default Browse
