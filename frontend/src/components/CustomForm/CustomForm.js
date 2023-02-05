import React, { useState } from 'react';
import { Form, FormGroup } from 'react-bootstrap'
import CustomField from '../CustomField/CustomField'
import CustomButton from '../CustomButton/CustomButton'
import '../CustomButton/CustomButton'
import './CustomForm.css';
function CustomForm() {
    const [formData, setFormData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        Object.entries(e.target.elements).map(([key, entry]) => {
            if (entry.type !== "submit")
                setFormData([...formData, { [entry.name]: entry.value }])
        })
    };

    const fields = {
        "Name": {
            type: "text",
            placeholder: "Eg. John Doe",
            pattern: "^[a-zA-Z ]+",
            required: "true"
        },
        "Roll Number": {
            type: "number",
            placeholder: "Eg. 26",
            min: 1,
            required: "true"
        },
        "E-Mail ID": {
            type: "email",
            placeholder: "Eg. johndoe123@gmail.com",
            required: "true"
        },
        "Phone Number": {
            type: "tel",
            placeholder: "Eg. 9876543210",
            pattern: "^[0-9]{10}$",
            required: "false"
        }
    }
    return (
        <Form className="form" onSubmit={handleSubmit}>
            <FormGroup className="formGroup">
                {
                    Object.entries(fields).map(([label, attr], index) => {
                        return <CustomField
                            key={label + index}
                            label={label}
                            type={attr.type}
                            placeholder={attr.placeholder}
                            pattern={attr.pattern}
                            required={attr.required}
                            min={attr.min} />
                    })
                }
            </FormGroup>
            <CustomButton />
        </Form>
    );
}

export default CustomForm;
