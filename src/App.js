import './App.css';
import ChildComponent from './ChildComponent.js'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div> hello world </div>
        {/* <LocalProvider value={{data: {name: 'Local Oliver'}}}> */}
          <ChildComponent />
        {/* </LocalProvider> */}
        <ChildComponent />
        <ChildComponent />

      </header>
    </div>
  );
}

export default App;
