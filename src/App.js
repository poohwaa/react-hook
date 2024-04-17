import "./App.css";
import useInput from "./hook/useInput";
import useTabs from "./hook/useTabs";

const contents = [
    {
        tab: "Section 1",
        content: "This is Seciotn 1"
    },
    {
        tab: "Section 2",
        content: "This is Seciotn 2"
    }
]
function App() {
    const maxLen = (value) => value.length <= 10;
    const name = useInput("Mr.", maxLen);
    const {currItem, changeItem} = useTabs(0, contents);
    
    return (
        <div className="App">
            <h1>React Hook</h1>
            <input placeholder="Name" {...name} />
            <hr/>
            {contents.map((item, index) => (
                <button key={index} onClick={() => changeItem(index)}>{item.tab}</button>
            ))}
            <div>{currItem.content}</div>
        </div>
    );
}

export default App;
