import TextField from '@mui/material/TextField'
import * as React from 'react'

//This component GeolocationBox has custom inputs from MUI. As technical task required app to make call to OpenStreetMap
// API through the entered coordinates by user
// - this is UI for making such call

//for managing values from forms there is action up 'information flow' going to parent component App and passing values to component
//JSONOutput(where we have logic of GET request and rendering result of response data )
const GeolocationBox = ({
  minLong,
  maxLong,
  minLat,
  maxLat,
  onHandleValueChange,
  // here are props through which data going up after action
}) => {
  //Fields hadle events with properties onChange and passing data from input to onHandleValueChange --> to parent component(<App />)
  return (
    <div
      className="GeoBox
    "
      style={{ minWidth: '100px' }}
    >
      <div className="topFields">
        <TextField
          type="number"
          label="Min Longitude (left)"
          onChange={(event) =>
            onHandleValueChange({ minLong: event.target.value })
          }
          value={minLong}
          sx={{ minWidth: '100px' }}
        />
        <TextField
          type="number"
          label="Max Longitude (right)"
          onChange={(event) =>
            onHandleValueChange({ maxLong: event.target.value })
          }
          value={maxLong}
        />
      </div>

      <div className="bottomFields">
        <TextField
          type="number"
          label="Min Latitude (bottom)"
          onChange={(event) =>
            onHandleValueChange({ minLat: event.target.value })
          }
          value={minLat}
        />
        <TextField
          type="number"
          label="Max Latitude (top)"
          onChange={(event) =>
            onHandleValueChange({ maxLat: event.target.value })
          }
          value={maxLat}
        />
      </div>
    </div>
  )
}

export default GeolocationBox
