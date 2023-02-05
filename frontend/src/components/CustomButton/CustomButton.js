import Button from 'react-bootstrap/Button'
import './CustomButton.css'
function CustomButton() {
    return (
        <Button
            className="submit"
            variant="primary"
            type="submit">Submit
        </Button>
    );
}

export default CustomButton
