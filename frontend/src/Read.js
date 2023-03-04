import { Container, Row } from 'react-bootstrap'
import CustomTable from './components/CustomTable/CustomTable'
import './Read.css'
function Read({ onClickEdit }) {
  const columns = ['Name', 'E-Mail ID', 'Phone Number', 'Interests', 'Location']
  return (
    <>
      <Container fluid className='cont'>
        <Row className='row'>
          <CustomTable
            headers={columns}
            editable={true}
            onClickEdit={onClickEdit} />
        </Row>
      </Container>
    </>
  )
}

export default Read