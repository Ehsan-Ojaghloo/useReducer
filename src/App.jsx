import React, { useReducer } from 'react'
import "./App.scss"

function operator(state, action) {
  switch (action.type) {
    case "num1":
      return state = true;
    case "num2":
      return state = false;
  }
}

function App() {

  const [animated, dispatch] = useReducer(operator, false)

  return (
    <div className='container'>
      <div className="btn-con">
        <button className={animated ? "animation1" : "animation2"} onClick={() => { dispatch({ type: "num1" }) }}>❌</button>
        <button className={animated ? "animation2" : "animation3"} onClick={() => { dispatch({ type: "num2" }) }}>✅</button>
      </div>
    </div>
  )
}

export default App