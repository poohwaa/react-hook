import useFullScreen from "./hook/useFullScreen";
import useScroll from "./hook/useScroll";

function AppEffect2 () {
    const {y} = useScroll();
    const onFulls = isFull => {
        console.log(isFull ? "it is Full" : "it is samll");
    }
    const {element, triggerFull, exitFull}  = useFullScreen(onFulls);
        
    return (
        <div className="App" style={{ height: "100vh"}}>
            <h1 style={{position: "fixed", color: y > 100 ? "red" : "blue"}}>Hi, scroll</h1>
            <div ref={element}>
                <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="img"/>
                <button onClick={exitFull}>Exit full screen</button>
            </div>
            <button onClick={triggerFull}>Make full screen</button>
        </div>
    );
}

export default AppEffect2