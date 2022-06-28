import { useEffect, useRef, useState } from "react"
import { initialValues, OnChangeArgs, ProductCardProps } from "../interfaces/ProductInterface"


interface UseProductProps {
    product: ProductCardProps
    onChange?: (args: OnChangeArgs) => void
    value?: number
    initialValue?: initialValues
}

export const useProduct = ({ product, onChange, value = 0, initialValue }: UseProductProps) => {

    const [counter, setcounter] = useState<number>(initialValue?.quantity || value)

    const isMounted = useRef(false)

    const increaseBy = (value: number) => {

        const quantity = Math.max(0, counter + value)
        setcounter(prevValue => Math.max(0, Math.min(prevValue + value, initialValue?.maxCount!)))
        onChange?.({ product, quantity })
    }

    const reset = () => {
        setcounter(initialValue?.quantity || value)
    }

    useEffect(() => {
        if (!isMounted.current) {
            return
        }
        setcounter(value)
    }, [value])



    return {
        counter,
        increaseBy,
        maxCount: initialValue?.maxCount,
        reset,
        product
    }
}