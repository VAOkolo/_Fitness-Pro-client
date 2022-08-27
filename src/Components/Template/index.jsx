import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";



export default function Template() {

    const [level, setlevel] = useState("")

    // const updateLevel = (e) => {
    //     e.preventDefault();
    //     dispatch({
    //         type: "SET_LEVEL",
    //         payload: e.target.player1.value
    //     });
    // }

    const changeLevel = (level) => {
        setlevel(level)
        console.log(level)
      }

    return (
        <>
            <div>
                <form /*onSubmit={updateLevel}*/>
                    <select name="level" id="level" onChange={(e) => changeLevel(e.target.value)}
                        value={level}>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </form>
                <div>
                    <h2>Beginner template</h2>
                    <ul>
                        <li>
                            Monday
                        </li>
                        <li>
                            Tuesday
                        </li>
                        <li>
                            Wednesday
                        </li>
                        <li>
                            Thurday
                        </li>
                        <li>
                            Friday
                        </li>
                        <li>
                            Saturday
                        </li>
                        <li>
                            Sunday
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
