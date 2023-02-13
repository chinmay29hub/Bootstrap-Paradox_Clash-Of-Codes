import { FormLabel, FormControl } from 'react-bootstrap'
import './CustomField.css'
function CustomField({ label, type, placeholder, pattern, min, required, autofocus }) {
    return (
        <>
            <FormLabel className='label'>{label}</FormLabel>
            <FormControl
                className='control'
                type={type}
                placeholder={placeholder}
                pattern={pattern || null}
                name={label}
                min={min}
                required={required}
                autoFocus={autofocus} />
        </>
    )
}

export default CustomField
