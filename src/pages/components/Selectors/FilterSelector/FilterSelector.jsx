import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@material-ui/core'
import { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import listContext from '../../../../contexts/listContext'

const FilterSelector = () => {
    const [nation, setNation] = useState(null)
    const [all, setAll] = useState([])

    const list = useContext(listContext)
    const dispatcher = useDispatch()

    const handleChange = (event) => {
        setNation(event.target.value)
        dispatcher({ type: 'SET_COUNTRY', payload: event.target.value })
    }

    useEffect(() => {
        const getNat = async () => {
            let nats = []
            if (!list) return
            for (let user of list.list) {
                if (!nats.find((el) => el.props.value == user.nat)) {
                    nats.push(<MenuItem value={user.nat}>{user.nat}</MenuItem>)
                }
            }
            return nats
        }
        const effect = async () => {
            const newList = await getNat()
            setAll(newList)
        }
        effect()
    }, [list])

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Nat</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Nat"
                    onChange={handleChange}
                    value={nation}
                >
                    <MenuItem value={null}>EVERYBODY</MenuItem>
                    {all}
                </Select>
            </FormControl>
        </Box>
    )
}

export default FilterSelector
