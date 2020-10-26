// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React from 'react'

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const count = state.count + action.step
      return {...state, count}

    default:
      throw new Error('Unsupported action type: ', action.type)
  }
}

function Counter({initialCount = 0, step = 5}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const {count} = state

  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
