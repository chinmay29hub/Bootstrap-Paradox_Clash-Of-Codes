import Insert from './Insert'
import Read from './Read'
import './App.css'
import { useState } from 'react'
function App() {
    const [showInsert, setShowInsert] = useState(true)
    const [prevData, setPrevData] = useState({})
    const swapComps = (data, flag) => {
        setPrevData(data)
        setShowInsert(flag)
    }
    return (
        <>
            {showInsert && <Insert prevData={prevData} onClickSubmit={swapComps} />}
            {!showInsert && <Read onClickEdit={swapComps} />}
        </>
    )
}

export default App
