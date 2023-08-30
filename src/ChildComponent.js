import React, { useContext } from 'react'
import { useGlobalState, createGlobalState } from './global/globalState'

let theGlobalState = createGlobalState({name: 'George'})

const ChildComponent = () => {
  let [globalValue, setGlobalValue] = useGlobalState(theGlobalState)
  
  let globalNameChange = (e) => {
    setGlobalValue({name: e.target.value})
  }

  return (
    <div>
      GlobalState value: {globalValue.name}
      <input value={globalValue.name} onChange={globalNameChange}></input>
    </div>
  )
}

export default ChildComponent