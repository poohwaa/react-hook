import { useEffect } from "react";
import { useState } from "react"

const useTitle = (initTitle) => {
    const [title, setTitle] = useState(initTitle)
    const updateTitle = () => {
        const titleHtml = document.querySelector("title")
        titleHtml.innerText = title
    }

    // didMount, willUpdate
    useEffect(updateTitle, [title])
    return setTitle;
}

export default useTitle