import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber} from './actions/index'
const App = () => {
  const myState = useSelector((state)=> state.changeTheNumber)
  const dispatch = useDispatch();
    return (
      <div>
        <button onClick={()=> dispatch(decNumber(5))}>-</button>
        <button onClick={()=> dispatch(incNumber(5))}>+</button>
        <p>{myState}</p>
      </div>
    )
}

export default App