let data = [
    { userid: 1, date: '29/08/2022', dayName: 'Monday', exercise: 'bench press', sets: 5, reps: 5, weight: 20, status: true },
    { userid: 1, date: '29/08/2022', dayName: 'Monday', exercise: 'bench press', sets: 5, reps: 5, weight: 20, status: true },
    { userid: 1, date: '29/08/2022', dayName: 'Monday', exercise: 'bench press', sets: 5, reps: 5, weight: 20, status: true },
    // { userid: 1, date: '30/08/2022', dayName: 'Tuesday', exercise: 'bench press', sets: 5, reps: 5, weight: 20, status: true },
    // { userid: 1, date: '30/08/2022', dayName: 'Tuesday', exercise: 'bench press', sets: 5, reps: 5, weight: 20, status: false },
    { userid: 1, date: '03/08/2022', dayName: 'Monday', exercise: 'bench press', sets: 5, reps: 5, weight: 20, status: true },
    { userid: 1, date: '03/08/2022', dayName: 'Monday', exercise: 'bench press', sets: 5, reps: 5, weight: 20, status: false },
    // { userid: 1, date: '03/08/2022', dayName: 'Monday', exercise: 'bench press', sets: 5, reps: 5, weight: 20, status: false },
    // { userid: 1, date: '04/08/2022', dayName: 'Tuesday', exercise: 'bench press', sets: 5, reps: 5, weight: 20, status: true },
    // { userid: 1, date: '04/08/2022', dayName: 'Tuesday', exercise: 'bench press', sets: 5, reps: 5, weight: 20, status: false },

]

function getTonnage(data, date) {
    let tonnage = 0;
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i].date == date) {
            tonnage += (data[i].weight * data[i].reps * data[i].sets)
        }
    }
    console.log(tonnage)
}

// console.log(data[0].date)

function getStatus(data) {
    let newArr = []
    for (let i = 0; i < data.length - 1; i++) {
        for (let j = 1; j < data.length; j++) {
            if (data[i].date != data[j].date && data[i].status != data[j].status) {
                // newArr.push(data[0])
                newArr.push(data[i])
                // newArr.push(data[j])
            }
        }
    }
    console.log(newArr)
}


function getProgression(data) {
    
}

getTonnage(data)
