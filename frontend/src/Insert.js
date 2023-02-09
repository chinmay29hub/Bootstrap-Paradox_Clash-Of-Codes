import { Container, Row } from 'react-bootstrap'
import CustomForm from './components/CustomForm/CustomForm'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './Insert.css'
function Insert() {
  const [formData, setFormData] = useState({})
  const receiveFormData = data => setFormData(data)
  const formFields = {
    'Name': {
      type: 'text',
      placeholder: 'Eg. John Doe',
      pattern: '^[a-zA-Z ]+',
      required: true
    },
    'Roll Number': {
      type: 'number',
      placeholder: 'Eg. 26',
      min: 1,
      required: true
    },
    'E-Mail ID': {
      type: 'email',
      placeholder: 'Eg. johndoe123@gmail.com',
      required: true
    },
    'Phone Number': {
      type: 'tel',
      placeholder: 'Eg. 9876543210',
      pattern: '^[0-9]{10}$',
      required: true
    }
  }

  useEffect(() => {
    const onReceivedFormData = () => {
      if (Object.keys(formData).length !== 0) {
        axios.post('http://localhost:5000/insert', formData)
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.error(error)
          })
      }
    }
    onReceivedFormData()
  }, [formData])

  return (
    <Container
      fluid
      className='cont'>
      <Row
        className='form-row'>
        <CustomForm formFields={formFields} getFormData={receiveFormData} />
      </Row>
    </Container>
  )
}

export default Insert