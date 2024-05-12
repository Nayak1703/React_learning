import React,{useState} from 'react'
import './table_style.css'

const TableGenerateTask = () => {
    const [rows, setRows] = useState("");
    const [cols, setCols] = useState("");
    const [matrix, setMatrix] = useState([]);

    function generateMatrix (e) {
        e.preventDefault();
        let newMatrix = [];
        for(let i=0; i<rows; i++) {
            let row = [];
            for(let j=0; j<cols; j++) {
                row.push(0)
            }
            newMatrix.push(row)
        }
        setMatrix(newMatrix)
    }

    return (
        <div>
            <form onSubmit={generateMatrix}>
                <label>Row:
                    <input type="number" placeholder='Enter row num' value={rows} onChange={(e)=>setRows(e.target.value)} />
                </label>

                <label>Col:
                    <input type="number" placeholder='Enter col num' value={cols} onChange={(e)=>setCols(e.target.value)} />
                </label>

                <button type="submit">Generate</button>
            </form>
            <div className='table-div'>
                <table>
                    <tbody>
                        {matrix.map((row,rowIndex)=>(
                            <tr key={rowIndex}>
                                {
                                    row.map((col,colIndex)=>(
                                        <td key={colIndex}>{col}</td>
                                    ))
                                }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableGenerateTask