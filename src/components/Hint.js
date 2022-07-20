//This component just a little help for using this App.
//I'd prefer to using names of places and cities with Nominatim tool rather than coordinates, as in techTask wasnt
//mentioned that in addition to rendering of data set of 'GeoJson features', the map should be rendered.
// soo this application is quite modest

const Hint = () => {
  return (
    <div className="hint">
      <h6>Hint: London coordinates:</h6>
      <p>minLong -0.1593017578125</p>
      <p>maxLong 51.49805708407405</p>

      <p>minLat -0.14591217041015625</p>
      <p>maxLat 51.50687269909403</p>
    </div>
  )
}

export default Hint
