import { useState } from 'react'

export default (initialValues) => {
    const [state, setstate] = useState(initialValues)

    return [
        state,
        (e) => {
            setstate({
                ...state,
                [e.target.name]: e.target.value
            })
        },
        (newState) => {
            setstate({
                ...state,
                ...newState
            })
        }
    ]
}