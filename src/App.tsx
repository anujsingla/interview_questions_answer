import "./App.css";
// import { ReactFragement } from "./Examples/ReactFragement";
import { MemoExample } from "./Examples/ReactMemo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ReactFragement /> */}
        <MemoExample />
      </header>
    </div>
  );
}

export default App;
