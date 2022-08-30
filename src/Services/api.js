const userWorkoutPaths = (user_id) => {
    fetch(`http://localhost:8000/api/gym/profile/workouts/${user_id}/active/${active}`)
        .then(res => res.json())
        .then(response => { console.log(response) })
}



export default userWorkoutPaths

