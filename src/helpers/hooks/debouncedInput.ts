import { useEffect, useState } from "react"

export const useDebouncedInput = (input: string, delay: number) => {
    const [debouncedInput, setDebouncedInput] = useState<string>('');

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncedInput(input)
        },delay)

        return () => clearTimeout(handler)
    },[input])

    return debouncedInput
}