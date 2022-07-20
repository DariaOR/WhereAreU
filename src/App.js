import './style.css'
import JSONOutput from './components/JSONOutput'
import GeolocationBox from './components/GeolocationBox'
import Support from './components/Support'
import { useState } from 'react'
import Hint from './components/Hint'

//Parent and main component App. Besides the rendering other components its pass data of fields' value that
//come from the child component GeolocationBox(from action up data flow)
//to another child component JSONOutput(data down)
//to GeolocationBox passed props through which data will be returned
//to JSONOutput passed props with coordinates entered by the user

function App(props) {
  const [{ minLong, maxLong, minLat, maxLat }, setCoord] = useState({})
  //  Destructuring of incoming data from inputs through props

  //function which sets the values to the coordinates, not erasing, but appending the data by user typing
  const onHandleValueChange = (params) => {
    setCoord({ minLong, maxLong, minLat, maxLat, ...params })
  }

  return (
    <div className="App">
      <div className="box">
        <JSONOutput
          minLong={minLong}
          maxLong={maxLong}
          minLat={minLat}
          maxLat={maxLat}
        />
        <div className="leftBox">
          <Hint />
          <GeolocationBox
            minLong={minLong}
            maxLong={maxLong}
            minLat={minLat}
            maxLat={maxLat}
            onHandleValueChange={onHandleValueChange}
          />
        </div>
      </div>
      <div className="sup">
        <Support className="support" />
      </div>
    </div>
  )
}

export default App
