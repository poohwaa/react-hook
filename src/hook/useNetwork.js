import { useEffect } from "react";
import { useState } from "react"

const useNetwork = onChange => {
    const [status, setStatus] = useState(navigator.onLine);

    const handle = () => {
        if (typeof onChange === "function") {
            onChange(navigator.onLine);
        }

        setStatus(navigator.onLine)
    }

    useEffect(() => {
        window.addEventListener("online", handle)
        window.addEventListener("offline", handle)
        
        return () => {
            window.removeEventListener("online", handle)
            window.removeEventListener("offline", handle)

        }
    })

    return status;

}

export default useNetwork