import { useEffect, useState } from "react"

export const useDebounce = (dly, value ) => {
    const [debounceValue, setDebounceValue] = useState('')
    
    useEffect(() => {

        let timer = setTimeout(() => {
            setDebounceValue(value)
        }, dly);

        return () => clearTimeout(timer)

    }, [dly, value])

    return debounceValue
}       