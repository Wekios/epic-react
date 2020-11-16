// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, screen, act} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'

// There's renderHook fn from React testing lib that does this

function TestComponentSimple() {
  const {count, increment, decrement} = useCounter({initialCount: 2})

  return (
    <>
      <button onClick={decrement}>decrement</button>
      <label>
        count
        <input onChange={() => {}} value={count} type="text" />
      </label>
      <button onClick={increment}>increment</button>
    </>
  )
}
// If it's easy to implement with a regular component
// Solution for complex is bellow
test('exposes the count and increment/decrement functions', () => {
  render(<TestComponentSimple />)

  const decrement = screen.getByText('decrement')
  const increment = screen.getByText('increment')
  const counter = screen.getByLabelText('count')

  expect(counter.value).toBe('2')

  userEvent.click(decrement)
  expect(counter.value).toBe('1')

  userEvent.click(increment)
  userEvent.click(increment)
  expect(counter.value).toBe('3')
})

// If it's difficult to implement with a regular component
// (ex: too complex, too much props etc...)
function setup({initialProps} = {}) {
  const result = {}
  function TestComponent(props) {
    result.current = useCounter(props)
    return null
  }
  render(<TestComponent {...initialProps} />)
  return result
}

test('exposes the count and increment/decrement functions', () => {
  const result = setup()
  expect(result.current.count).toBe(0)
  act(() => result.current.increment())
  expect(result.current.count).toBe(1)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})

test('allows customization of the initial count', () => {
  const result = setup({initialProps: {initialCount: 3}})
  expect(result.current.count).toBe(3)
})

test('allows customization of the step', () => {
  const result = setup({initialProps: {step: 2}})
  expect(result.current.count).toBe(0)
  act(() => result.current.increment())
  expect(result.current.count).toBe(2)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})
