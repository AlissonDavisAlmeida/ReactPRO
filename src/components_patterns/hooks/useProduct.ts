import { useEffect, useRef, useState } from "react"
import { OnChangeArgs, ProductCardProps } from "../interfaces/ProductInterface"


interface UseProductProps {
    product: ProductCardProps
    onChange?: (args: OnChangeArgs) => void
    value?: number
}

export const useProduct = ({ product, onChange, value }: UseProductProps) => {

    const [counter, setcounter] = useState(value || 0)

    const isControlled = useRef(!!onChange)

    useEffect(() => {
        setcounter(value || 0)
    }, [value])


    const increaseBy = (value: number) => {

        if(isControlled.current){
            return onChange?.({quantity:value, product})
        }

        const quantity = Math.max(0, counter + value)
        setcounter(prevValue => Math.max(0, prevValue + value))
        onChange?.({ product, quantity })
    }


    return {
        counter,
        increaseBy
    }
}