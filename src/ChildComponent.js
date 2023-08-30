import React, { useContext } from 'react'
import { useGlobalState, createGlobalState, GetSomeState } from './global/globalState'
import { appContext } from './appContext'

let theGlobalState = createGlobalState({name: 'George'})


const ChildComponent = () => {
  // let [globalValue, setGlobalValue] = useGlobalState(theGlobalState)
  let [globalOrLocalValue, setGlobalOrLocalValue] = GetSomeState(appContext, theGlobalState)

  console.log({globalOrLocalValue})

  // let globalNameChange = (e) => {
  //   setGlobalValue({name: e.target.value})
  // }
  let globalOrLocalNameChange = (e) => {
    setGlobalOrLocalValue({name: e.target.value})
  }

  return (
    <div>
      {/* GlobalState value: {globalValue.name}
      <input value={globalValue.name} onChange={globalNameChange}></input> */}
      GlobalOrLocal value: {globalOrLocalValue.name}
      <input value={globalOrLocalValue.name} onChange={globalOrLocalNameChange}></input>
    </div>
  )
}

export default ChildComponent