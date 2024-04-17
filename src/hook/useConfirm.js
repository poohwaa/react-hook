const useConfirm = (message = "", callback, abort)=> {
    if (!callback && typeof callback !== "function") {
        return;
    }

    if (abort && typeof abort !== "function") {
        return;
    }

    const confirmAction = () => {
        if (window.confirm(message)) {
            callback();
        } else {
            abort();
        }
    }

    return confirmAction;
}

export default useConfirm