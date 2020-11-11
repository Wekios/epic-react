// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'
import faker from 'faker'

const buildLoginForm = overrides => ({
  username: faker.internet.userName(),
  password: faker.internet.password(),
  ...overrides,
})

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn()
  render(<Login onSubmit={handleSubmit} />)
  const {username, password} = buildLoginForm({password: 'testTest123$%^'})

  const usernameInput = screen.getByLabelText(/username/i)
  const passwordInput = screen.getByLabelText(/Password/i)

  userEvent.type(usernameInput, username)
  userEvent.type(passwordInput, password)
  userEvent.click(screen.getByRole('button', {name: /submit/i}))

  expect(handleSubmit).toHaveBeenCalledWith({
    username,
    password,
  })

  expect(handleSubmit).toHaveBeenCalledTimes(1)
})
