import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './Components/MyNav'
import { Container } from 'react-bootstrap';
import MyFooter from './Components/MyFooter'
import Welcome from './Components/Welcome';
import LatestRelease from './Components/LatestRelease';
import { Row } from 'react-bootstrap';
import LatestReleasesHeading from './Components/LatestReleasesHeading';

function App() {
  return (

    <Container fluid>
      <MyNav />

      <Welcome />
      <LatestReleasesHeading />
    <Row>
      <LatestRelease />

    </Row>

      <MyFooter />

    </Container>

  );
}

export default App;
