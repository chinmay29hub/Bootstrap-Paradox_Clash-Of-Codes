import { Container, Row } from 'react-bootstrap'
import CustomForm from './components/CustomForm/CustomForm'
import './App.css';
function App() {
  return (
    <Container
      fluid
      className="cont">
      <Row
        className="form-row">
        <CustomForm />
      </Row>
    </Container>
  );
}

export default App;