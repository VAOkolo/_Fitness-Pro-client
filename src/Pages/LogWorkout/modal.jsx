import React, { useState } from 'react'
import './modalStyle.css'

export default function Modal({ open, onClose, url, id, exercise, rows, addRow, submitData, value }) {
    if (!open) {
        return null
    }

    // const [rows, setRows] = useState([])

    return (
        <>
            <div className="overlay" id={id}>
                <div className="modalContainer">
                    <h2>{exercise}</h2>
                    <div>
                        <table>
                            <tr>
                                <td>{exercise}</td>
                                <td>Sets</td>
                                <td>Reps</td>
                                <td>Weight</td>
                                <td><button onClick={addRow}>+</button></td>
                                <td><button onClick={submitData}>Submit workouts</button></td>
                            </tr>
                            {rows && rows.map((row, index) => (

                                <tr id={index + 1}>
                                    <td>Set = {index + 1}</td>
                                    <td><input type="number" placeholder="reps" onChange={value} value={value} /></td>
                                    <td><input type="number" placeholder="weights" onChange={value} value={value} /></td>
                                </tr>
                            ))}
                        </table>
                    </div>
                    <div>
                        <iframe width="220" height="115"
                            src={url}>
                        </iframe>
                    </div>
                    <div className="modalRight">
                        <p onClick={onClose} className="closeBtn">X</p>
                    </div>
                </div>
            </div>
        </>
    )
}