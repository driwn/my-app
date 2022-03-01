import { Pagination, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const PageSelector = () => {
    const dispatcher = useDispatch()

    const filter = useSelector((state) => state.filter.count)
    const list = useSelector((state) => state.filteredList.filteredList)

    const calculate = () => {
        return Math.floor(list.length / filter) + 1
    }

    const [count, setCount] = useState(calculate())

    const handleChange = (event, value) => {
        dispatcher({ type: 'SET_PAGE', payload: value })
    }

    useEffect(() => {
        const newCount = calculate()
        setCount(newCount)
    }, [filter, list])

    return (
        <Stack spacing={2}>
            <Pagination count={count} onChange={handleChange} />
        </Stack>
    )
}

export default PageSelector
