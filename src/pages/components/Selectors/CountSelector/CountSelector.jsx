import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

const CountSelector = () => {
    const dispatcher = useDispatch()

    const count = useSelector((state) => state.filter.count)

    const handleChange = (event) => {
        dispatcher({ type: 'SET_COUNT', payload: event.target.value })
    }
    const list = () => {
        let items = []
        for (let i = 1; i < 10; i++) {
            items.push(<MenuItem value={i * 4}>{i * 4}</MenuItem>)
        }
        return items
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Results</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="results"
                    value={count}
                    onChange={handleChange}
                >
                    {list()}
                </Select>
            </FormControl>
        </Box>
    )
}

export default CountSelector
