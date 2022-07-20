import osmtogeojson from 'osmtogeojson'
import axios from 'axios'
import { useEffect, useState } from 'react'
import JSONInput from 'react-json-editor-ajrm'
import locale from 'react-json-editor-ajrm/locale/en'
//Component JSONOutput makes call API OpenStreetMap with GET request and renders data response in GeoJson format into JsonEditor
//For pretty presentation of GeoJson data I took JsonEditor. Use scroll to see all data.
//Also I cut data response to make the browser breathe easier. out of TechTask. Only first arr in Obj is rendered.

const JSONOutput = (props) => {
  const [data, setData] = useState()
  //react Hook which gets osm data response of request

  const URL_basic = 'https://www.openstreetmap.org/api/0.6/map'
  const { minLong, maxLong, minLat, maxLat } = props
  //  Destructuring of incoming data from inputs through props

  //Hook which have function with makes GET request call by endpoint with custom's coordinates
  //UseEffect calls once - when page already rendered and in case if user change all values in fields, page will be rendered
  //again with new data
  useEffect(() => {
    const resreq = async (props) => {
      //For request – there is axios used, not a fetch(cause the format of returned data is not understandable format for JS)
      axios
        .get(`${URL_basic}?bbox=${minLong},${maxLong},${minLat},${maxLat}`, {
          'Content-Type': 'application/xml; charset=utf-8',
        })
        .then((response) => {
          setData(osmtogeojson(response.data).features[0]) //set value of responsed data(osm format returned) and convert it to geo json
        })
        .catch((err) => console.log(err.message))
    }
    resreq()
  }, [minLong, maxLong, minLat, maxLat]) //dependence on values change for 4 coordinates from inputs

  //JSONEditor component displays GeoJson data with its own json visual style,
  //data is passed to the component through the placeholder property
  return (
    <div className="jsonField">
      <JSONInput
        id={'jsonInput'}
        placeholder={data}
        locale={locale}
        height="500px"
        viewOnly="true"
        className="JSONInput"
      />
    </div>
  )
}

export default JSONOutput
