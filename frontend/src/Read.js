import { Container, Row } from 'react-bootstrap'
import CustomTable from './components/CustomTable/CustomTable'
import './Read.css'
function Read() {
  const columns = ['Name', 'Roll Number', 'E-Mail ID', 'Phone Number']
  return (
    <>
      <Container fluid className='cont'>
        <Row className='row'>
          <CustomTable headers={columns} />
        </Row>
      </Container>
    </>
  )
}

export default Read