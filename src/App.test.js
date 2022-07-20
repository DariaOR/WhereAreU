import { render, screen, cleanup } from '@testing-library/react'
import App from './App'
import user from '@testing-library/user-event'
import axiosMock from 'axios'
import JSONOutput from './components/JSONOutput'
import { testData } from './testData'

afterEach(cleanup)

test('renders support link', () => {
  render(<App />)
  const linkElement = screen.getByRole('link', {
    name: /help to stop genocide in ukraine!/i,
  })
  expect(linkElement).toBeInTheDocument()
})

it('first form data insert', () => {
  render(<App />)

  const minLong = screen.getByLabelText(/Min Longitude \(left\)/i)
  user.type(minLong, '-0.1593017578125')
  expect(minLong.value).toBe('-0.1593017578125')
})

it('call API', async () => {
  axiosMock.get.mockResolvedValueOnce(testData)

  const minLong = '-0.1593017578125'
  const maxLong = '51.49805708407405'
  const minLat = '-0.14591217041015625'
  const maxLat = '51.50687269909403'

  render(
    <JSONOutput
      minLong={minLong}
      maxLong={maxLong}
      minLat={minLat}
      maxLat={maxLat}
    />,
  )
  expect(axiosMock.get).toHaveBeenCalledTimes(1)
  expect(axiosMock.get).toHaveBeenCalledWith(
    'https://www.openstreetmap.org/api/0.6/map?bbox=-0.1593017578125,51.49805708407405,-0.14591217041015625,51.50687269909403',
    {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  )
})
