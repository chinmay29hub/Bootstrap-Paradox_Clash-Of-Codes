import './FloatingDropdown.css'
export default function FloatingDropdown({ radioOpt, setRadioOpt }) {
    return (
        <>
            <div className='floating-dropdown'>
                <p>Search by</p>
                <label className="drp-dwn-cont">
                    <span>Interests</span>
                    <input
                        type="checkbox"
                        name="interests"
                        onChange={(e) => {
                            if (e.target.checked) {
                                setRadioOpt([...radioOpt, e.target.name]);
                            } else {
                                setRadioOpt(radioOpt.filter((option) => option !== e.target.name));
                            }
                        }} />
                    <span className="checkmark"></span>
                </label>
                <label className="drp-dwn-cont">
                    <span>Destination</span>
                    <input
                        type="checkbox"
                        name="destination"
                        onChange={(e) => {
                            if (e.target.checked) {
                                setRadioOpt([...radioOpt, e.target.name]);
                                console.log(radioOpt)
                            } else {
                                setRadioOpt(radioOpt.filter((option) => option !== e.target.name));
                                console.log(radioOpt)
                            }
                        }} />
                    <span className="checkmark"></span>
                </label>
            </div>
        </>
    )
}
