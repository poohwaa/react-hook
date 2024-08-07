import { useRef } from "react";

const useFullScreen = (callback) => {
    const element = useRef();
    const triggerFull = () => {
        if(element.current) {
            // console.log(element.current)
            element.current.requestFullscreen();

            if (callback && typeof callback === "function") {
                callback(true);
            }
        }
    }

    const exitFull = () => {
        // console.log(document.fullscreenElement);
        if(document.fullscreenElement != null) {
            document.exitFullscreen();

            if (callback && typeof callback === "function") {
                callback(false);
            }
        }
    }

    return {element, triggerFull, exitFull};
}

export default useFullScreen;