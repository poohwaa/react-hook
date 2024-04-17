import useTitle from "./hook/useTitle";
import useClick from "./hook/useClick";
import useConfirm from "./hook/useConfirm";
import usePreventLeave from "./hook/usePreventLeave";
import useBeforeLeave from "./hook/useBeforeLeave";
import useFadeIn from "./hook/useFadeIn";
import useNetwork from "./hook/useNetwork";

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

    const showMsg = () => console.log("plz dont leave")
    useBeforeLeave(showMsg)

    const fadeEleRef1 = useFadeIn(1, 2);
    const fadeEleRef2 = useFadeIn(5, 2);

    const handleNetworkChange = (isOnline) => {
        console.log(isOnline ? "We are Online": "We are Offline")
    }
    const onLine = useNetwork(handleNetworkChange);
    
    return (
        <div className="App">
            <h1 ref={clickEle}>React Hook Use Effect</h1>
            <button onClick={confirmDelete}>Delete the word</button>
            <hr/>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
            <hr/>
            <h1 {...fadeEleRef1}>FADE IN1</h1>
            <h1 {...fadeEleRef2}>FADE IN2</h1>
            <hr/>
            <p>{onLine? "Online" : "Offline"}</p>
        </div>
    );
}

export default AppEffect