import React from 'react'
import { BrowseContainer } from '../containers'
import { useContent } from '../hooks'
import { selectionFilter } from '../utils'

const Browse = () => {
    const { films } = useContent('films')
    const { series } = useContent('series')
    const slides = selectionFilter({ series, films })

    return <BrowseContainer slides={slides} />
}
export default Browse
