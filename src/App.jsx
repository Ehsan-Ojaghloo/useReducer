import React, { useReducer } from 'react'

function App() {

  function reducer(state, action) {
    switch (action) {
      case 'increase':
        return state + 1;
      case 'decrease':
        return state - 1;
      case 'reset':
        return (state = 0)
    }
  }

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Hello</h1>
      <h2>useReducer</h2>
      <button onClick={() => dispatch('increase')}>+</button>
      <span onClick={() => dispatch('reset')}>count is {count}</span>
      <button onClick={() => dispatch('decrease')}>-</button>
    </div>
  )
}

export default App