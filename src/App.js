import './App.css';
import Hello from "./component/Hello";

function App() {
    const trued = 'dd'
    return (
        <div className="App">
            <h1 style={{color: 'red', opacity: 0.5}}>{trued}</h1>
            <Hello />
        </div>
    );
}

export default App;
