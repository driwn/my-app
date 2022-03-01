import { useState } from 'react'

const Time = () => {
    const getTimeString = () => {
        const date = new Date()
        const stringifyTime = date.toString()
        return stringifyTime
    }
    const [time, setTime] = useState(getTimeString())

    setInterval(() => {
        setTime(getTimeString())
    }, 1000)

    return <div>{time}</div>
}

export default Time
