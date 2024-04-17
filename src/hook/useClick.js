import { useEffect } from "react";
import { useRef } from "react"

const useClick = (onClick) => {
    const element = useRef();

    
    useEffect(() => {

        if (typeof onClick !== "function") {
            return;
        }
        
        let eleCurrent
        if (element.current) {
            eleCurrent = element.current;
            eleCurrent.addEventListener("click", onClick)
        }
        
        // componentWillUnmount
        return () => {
            if (eleCurrent) {
                eleCurrent.removeEventListener("click", onClick)
            }
        }
        // componentDidMount once 
    })

    return  element;
}

export default useClick