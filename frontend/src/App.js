import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingDropdown from './components/FloatingDropdown/FloatingDropdown';
import './App.css'
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import TripEventCard from './components/TripEventCard/TripEventCard';
// import TripEventCard from './components/TripEventCard/TripEventCard';
function App() {
    const [showDrpDwn, setShowDrpDwn] = useState(false)
    const locRef = useRef(null);
    const [loc, setLoc] = useState("")
    const [tripAndEventData, setTripAndEventData] = useState([])
    const [radioOpt, setRadioOpt] = useState([])

    const toTitleCase = str => str.replace(/(^\w|\s\w)(\S*)/g, (_, m1, m2) => m1.toLocaleUpperCase() + m2.toLocaleLowerCase())

    const handleSearchBtn = () => {
        if (locRef.current.value)
            setLoc(toTitleCase(locRef.current.value))
    }

    const handleFilterBtn = () => {
        showDrpDwn ? setShowDrpDwn(false) : setShowDrpDwn(true)
    }

    const handleKey = e => {
        if (e.key === "Enter")
            handleSearchBtn()
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:5000/read')
                // console.log(result.data)
                setTripAndEventData(result.data)
            } catch (error) {
                console.error(`Error fetching data: ${error}`)
            }
        }
        fetchData()
    }, [])

    return (
        <>
            <Container fluid
                style={{
                    padding: "0",
                    height: "100vh"
                }}>
                <nav className="upper-nav" style={{ position: "absolute" }}>
                    <button className="filter-btn" type="button" onClick={handleFilterBtn}><img className="filter-btn-icon" src="./assets/filter_btn_icon.png" alt="" /></button>
                    <input className="searchField" type="text" placeholder="Search here..." ref={locRef} onKeyDown={handleKey} autoFocus />
                    <button className="search-btn" type="submit" onClick={handleSearchBtn}><img className="search-btn-icon" src="./assets/search_btn_icon.png" alt="" /></button>
                </nav>
                {showDrpDwn && <FloatingDropdown radioOpt={radioOpt} setRadioOpt={setRadioOpt} />}
                <Row className='main' style={{
                    margin: "0",
                    paddingTop: "6rem",
                    height: "100%"
                }}>
                    <Col xs={5} sm={5} md={5} lg={5} xl={5}
                        style={{
                            padding: "1.5rem",
                            border: "0.1rem solid #C0C5CF",
                            height: "100%"
                        }}>
                        {tripAndEventData && function () {
                            console.log(tripAndEventData["events"])
                        }()
                            /* <TripEventCard tripAndEventData={tripAndEventData} />  */
                        }
                    </Col>
                    <Col xs={7} sm={7} md={7} lg={7} xl={7}
                        style={{
                            padding: "1.5rem",
                            height: "100%"
                        }}>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default App
