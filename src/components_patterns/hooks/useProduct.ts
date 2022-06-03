import { useState } from "react"

export const useProduct = ()=>{

    const [counter, setcounter] = useState(0)

    const increaseBy = (value: number)=>{
        setcounter(prevValue => Math.max(0, prevValue + value))
    }


    return {
        counter,
        increaseBy
    }
}