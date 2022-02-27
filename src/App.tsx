import "./App.css";
// import { ReactFragement } from "./Examples/ReactFragement";
// import { MemoExample } from "./Examples/ReactMemo";
import { ReactUseEffectDependency } from "./Examples/ReactUseEffectDependency";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ReactFragement /> */}
        <ReactUseEffectDependency />
      </header>
    </div>
  );
}

export default App;
