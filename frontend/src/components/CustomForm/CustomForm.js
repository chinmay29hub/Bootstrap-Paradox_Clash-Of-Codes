import React from 'react'
import { Form, FormGroup } from 'react-bootstrap'
import CustomField from '../CustomField/CustomField'
import CustomButton from '../CustomButton/CustomButton'
import '../CustomButton/CustomButton'
import './CustomForm.css'
function CustomForm({ formFields, getFormData }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {}
        Object.entries(e.target.elements).forEach((entry) => {
            if (entry[1].type !== "submit" && entry[1].value)
                data[entry[1].name] = entry[1].value
        })
        getFormData(data)
    }

    return (
        <Form className="form" onSubmit={handleSubmit}>
            <FormGroup className="formGroup">
                {
                    Object.entries(formFields).map(([label, attr], index) => {
                        return <CustomField
                            key={label + index}
                            label={label}
                            type={attr.type}
                            placeholder={attr.placeholder}
                            pattern={attr.pattern}
                            required={attr.required}
                            min={attr.min}
                        />
                    })
                }
            </FormGroup>
            <CustomButton />
        </Form>
    )
}

export default CustomForm
