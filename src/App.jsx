import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import ytbThumbnail from "./sendDataToGsheets.png";
import { Button, Card } from 'react-bootstrap'
import NavBaar from './Navbaar';
const { theActualCode } = require('./theCode.jsx');
function App() {
  return (
    <div className="App">
      <NavBaar></NavBaar>
      <h1>Sending sensor data to Google Sheets</h1>
      <img src={ytbThumbnail} alt="" width="100%" />

      <Card>
        <br />
        <Card.Body>
          <Card.Title>
            Code for the AppScript
          </Card.Title>
          <Card.Text>
            {theActualCode}
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <br />
      <Button onClick={() => { navigator.clipboard.writeText(theActualCode) }}>Copy Code</Button>
      <br />
      <br />
    </div>
  );
}

export default App;
