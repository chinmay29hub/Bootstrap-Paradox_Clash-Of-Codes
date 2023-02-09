import './CustomTableRow.css'
function CustomTableRow({ rowIndex, row }) {
    return (
        <tr key={rowIndex} className='custom-table-row'>
            <td>{rowIndex + 1}</td>
            {Object.keys(row).map((col, colIndex) => {
                if (colIndex !== 0)
                    return <td key={colIndex}>{row[col]}</td>
            })}
        </tr>
    )
}

export default CustomTableRow