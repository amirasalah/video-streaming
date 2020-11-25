import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Player } from '../components'

describe('The player Component', () => {
    it('Renders the component with a video of a bunny!', () => {
        const { container, getByText, queryByTestId } = render(
            <Player>
                <Player.Button></Player.Button>
                <Player.Video src='/videos/bunny.mp4'></Player.Video>
            </Player>,
        )
        expect(queryByTestId('player')).toBeFalsy()
        fireEvent.click(getByText('Play'))
        expect(queryByTestId('player')).toBeTruthy()
        fireEvent.click(getByText('Play'))
        expect(queryByTestId('player')).toBeFalsy()
        expect(container.firstChild).toMatchSnapshot()
    })
})
