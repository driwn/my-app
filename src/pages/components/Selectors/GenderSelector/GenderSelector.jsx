import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './GenderSelector.css'

const GenderSelector = () => {
    const [gender, setGender] = useState(null)
    const dispatcher = useDispatch()

    const handleGender = (event, value) => {
        let setted = value
        if (gender === value) {
            setted = null
        }
        setGender(setted)
        dispatcher({ type: 'SET_GENDER', payload: setted })
    }
    return (
        <ToggleButtonGroup
            value={gender}
            onChange={handleGender}
            aria-label="gender"
            exclusive
        >
            <ToggleButton value="male" aria-label="male">
                ♂
            </ToggleButton>
            <ToggleButton value="female" aria-label="famale">
                ♀
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default GenderSelector
