import { useState, useEffect } from 'react'
import axios from 'axios'
import CustomTableRow from './CustomTableRow/CustomTableRow'
import './CustomTable.css'
function CustomTable({ headers }) {
    const [data, setData] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:5000')
                setData(result)
            } catch (error) {
                console.log(`Error fetching data: ${error}`)
            }
        }
        fetchData()
    }, [])

    return (
        <div className='custom-table-div'>
            <table className='custom-table'>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        {headers.map((headerName, headerIndex) => {
                            return <th key={headerIndex}>{headerName}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {(Object.keys(data).length) ?
                        data.data.map((row, rowIndex) => {
                            return <CustomTableRow key={rowIndex} rowIndex={rowIndex} row={row} />
                        }) : null
                    }
                    {/* <CustomTableRow /> */}
                </tbody>
            </table>
        </div>
    )
}

export default CustomTable