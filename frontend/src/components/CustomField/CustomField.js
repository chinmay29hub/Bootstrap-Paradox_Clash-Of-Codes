import { FormLabel, FormControl } from 'react-bootstrap'
import './CustomField.css'
function CustomField({ label, type, placeholder, pattern, min, required }) {
    return (
        <>
            <FormLabel
                className="label">
                {label}
            </FormLabel>
            {required ?
                <FormControl
                    className="control"
                    type={type}
                    placeholder={placeholder}
                    pattern={pattern || null}
                    name={label}
                    min={min}
                    required /> :
                <FormControl
                    className="control"
                    type={type}
                    placeholder={placeholder}
                    pattern={pattern || null}
                    name={label}
                    min={min} />}
        </>
    )
}

export default CustomField
