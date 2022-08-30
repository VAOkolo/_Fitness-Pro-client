import React, { useState } from 'react'
import './modalStyle.css'

export default function Modal({ open, onClose, url, id, exercise, rows, addRow, submitData}) {
    if (!open) {
        return null
    }

    return (
        <>
            <div className="overlay" id={id}>
                <div className="modalContainer">
                    <h2>{exercise}</h2>
                    <div>
                        <table>
                            <thead>
                            <tr>
                                <th>{exercise}</th>
                                <th>Sets</th>
                                <th>Reps</th>
                                <th>Weight</th>
                                <th><button onClick={addRow}>+</button></th>
                                <th><button onClick={submitData}>Submit workouts</button></th>
                            </tr>
                            </thead>
                            <tbody>
                            {rows && rows.map((row, index) => (

                                <tr id={index + 1}>
                                    <td>Set = {index + 1}</td>
                                    <td><input type="number" placeholder="reps" /></td>
                                    <td><input type="number" placeholder="weights"  /></td>
                                </tr>
                            ))}
                            </tbody>
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
