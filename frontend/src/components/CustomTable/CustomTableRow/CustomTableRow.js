import './CustomTableRow.css'
function CustomTableRow({ rowIndex, row, editable, handleDelete }) {
    return (
        <tr
            key={rowIndex}
            className='custom-table-row'>
            <td>{rowIndex + 1}</td>
            {Object.keys(row).map((col, colIndex) => {
                if (colIndex !== 0)
                    return <td key={colIndex}>{row[col]}</td>
            })}
            {editable && <td className='edit-delete-column'>
                <button>Edit</button>
                <button
                    style={{ marginLeft: '0.5rem' }}
                    onClick={() => { handleDelete(row['_id']) }}>Delete</button>
            </td>}
        </tr>
    )
}

export default CustomTableRow