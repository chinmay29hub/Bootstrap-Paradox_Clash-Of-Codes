import { Form, FormGroup, Button } from 'react-bootstrap'
import CustomField from './CustomField/CustomField'
import './CustomForm.css'
function CustomForm({ formFields, getFormData }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {}
        Object.entries(e.target.elements).forEach((entry) => {
            if (entry[1].type !== 'submit' && entry[1].value)
                data[entry[1].name] = entry[1].value
        })
        getFormData(data)
    }

    return (
        <Form className='form' onSubmit={handleSubmit}>
            <FormGroup className='formGroup'>
                {Object.entries(formFields).map(([label, attr], index) => {
                    return <CustomField
                        key={label + index}
                        label={label}
                        type={attr.type}
                        placeholder={attr.placeholder}
                        pattern={attr.pattern}
                        min={attr.min}
                        required={attr.required}
                        autofocus={index === 0 ? true : false}
                    />
                })}
            </FormGroup>
            <Button
                className='submit'
                variant='primary'
                type='submit'>Submit
            </Button>
        </Form>
    )
}

export default CustomForm
