import './App.css';
import ChildComponent from './ChildComponent.js'
import { createContext, useState } from 'react'
import { GetSomeState, GlobalStateProvider } from './global/globalState';
import { appContext } from './appContext';



function App() {
  let [value, setValue] = useState({name: 'Local Oliver'})
  let [secondValue, setSecondValue] = useState({name: 'Local Simon'})
  let AppProvider = appContext.Provider

  return (
    <div className="App">
      <header className="App-header">
        <div> hello world </div>
        <AppProvider value={[value, setValue]}>
          <ChildComponent />
        </AppProvider>
        <ChildComponent />
        <ChildComponent />
        <AppProvider value={[secondValue, setSecondValue]}>
          <ChildComponent />
        </AppProvider>

      </header>
    </div>
  );
}

export default App;
