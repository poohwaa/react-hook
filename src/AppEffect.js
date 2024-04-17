import { useRef } from "react";
import useTitle from "./hook/useTitle";
import useClick from "./hook/useClick";
import useConfirm from "./hook/useConfirm";
import usePreventLeave from "./hook/usePreventLeave";

function AppEffect () {
    const titleUpdator = useTitle("...Loading")
    setTimeout(() => titleUpdator("HOME!"), 5000)
    const sayHello = () => console.log("hi")

    const clickEle = useClick(sayHello);

    const deleteWord = () => {
        console.log("deleting the word")
    }
    const abort = () => console.log("Abort")
    const confirmDelete = useConfirm("Are you sure?", deleteWord, abort)

    const {enablePrevent, disablePrevent} = usePreventLeave();
    
    return (
        <div className="App">
            <h1 ref={clickEle}>React Hook Use Effect</h1>
            <button onClick={confirmDelete}>Delete the word</button>
            <hr/>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
        </div>
    );
}

export default AppEffect