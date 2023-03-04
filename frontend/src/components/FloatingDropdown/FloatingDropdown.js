import './FloatingDropdown.css'
export default function FloatingDropdown({ radioOpt, setRadioOpt }) {
    return (
        <>
            <div className='floating-dropdown'>
                <p>Search by</p>
                <label class="drp-dwn-cont">
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
                    <span class="checkmark"></span>
                </label>
                <label class="drp-dwn-cont">
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
                    <span class="checkmark"></span>
                </label>
            </div>
        </>
    )
}
