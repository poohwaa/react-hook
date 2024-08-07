import useAxios from "./hook/useAxios";
import useFullScreen from "./hook/useFullScreen";
import useNotification from "./hook/useNotification";
import useScroll from "./hook/useScroll";

function AppEffect2 () {
    const {y} = useScroll();
    const onFulls = isFull => {
        console.log(isFull ? "it is Full" : "it is samll");
    }
    const {element, triggerFull, exitFull}  = useFullScreen(onFulls);
    const trigger = useNotification("Can I steal your money", 
        {
            body: "Of course Not"
        }
    );
    const {loading, data, error, refetch} = useAxios(
        {
            url: "https://yts.mx/api/v2/list_movies.json"
        }
    );

    // console.log(loading, error);
    // console.table(data);
        
    return (
        <div className="App" style={{ height: "100vh"}}>
            <h1 style={{position: "fixed", color: y > 100 ? "red" : "blue"}}>Hi, scroll</h1>
            <div ref={element}>
                <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="img"/>
                <button onClick={exitFull}>Exit full screen</button>
            </div>
            <button onClick={triggerFull}>Make full screen</button>
            <button onClick={trigger}>Notify</button>
            <h1>{data && data.status}</h1>
            <h2>{loading ? "Loading..." : "loaded"}</h2>
            <button onClick={refetch}>refetch</button>
        </div>
    );
}

export default AppEffect2