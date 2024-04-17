import { useEffect } from "react";
import { useRef } from "react"

const useClick = (onClick) => {
    const element = useRef();

    
    useEffect(() => {

        if (typeof onClick !== "function") {
            return;
        }
        
        if (element.current) {
            element.current.addEventListener("click", onClick)
        }
        
        // componentWillUnmount
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick)
            }
        }
        // componentDidMount once 
    }, [])

    return  element;
}

export default useClick