import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
    const handel = (event) => {
        const {clientY} = event;
        if (clientY <= 0) {
            onBefore();
        }
    }

    useEffect(() => {
        if (typeof onBefore !== "function") {
            return;
        }

        document.addEventListener("mouseleave", handel)

        return () => document.removeEventListener("mouseleave", handel)
    })

}

export default useBeforeLeave;