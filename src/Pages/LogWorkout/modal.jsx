import React, { useState } from 'react'
import './modalStyle.css'

export default function Modal({ open, onClose, url, id, data, exercise, workoutSetId, rows, addRow, submitData }) {
    if (!open) {
        return null
    }

    return (
        <div className="overlay container" id={workoutSetId}>
            <div className="modalContainer row justify-content-start">

                <h2 className='text-lg font-bold text-center'>{exercise}</h2>
                <div className='col'>
                    <table className='center text-center'>
                        <thead>
                            <tr>
                                <th>Sets</th>
                                <th>Reps</th>
                                <th>Weight</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((render, index) => (
                                <tr key={index}>
                                    <td>Set {index + 1}</td>
                                    <td>{render.reps}</td>
                                    <td>{render.weights}</td>
                                </tr>
                            ))}
                            {rows && rows.map((row, index) => (
                                <tr className='sets form-row' id={id} key={index}>
                                    <td>Set {index + 1}</td>
                                    <td className='col-md-6'>
                                        <input type="number" className='form-control' placeholder="reps" />
                                    </td>
                                    <td>
                                        <input type="number" className='form-control' placeholder="weights" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='row'>
                    <button onClick={addRow}>Add</button>
                </div>
                <div className='row'>
                    <button onClick={submitData}>Submit</button>
                </div>

                <div className="modalRight">
                    <p onClick={onClose} className="buttn">X</p>
                </div>
            </div>
        </div >
    )
}
