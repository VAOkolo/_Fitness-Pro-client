let beginnerTemplate = [
  { "Monday": [1, 2, 3, 4, 5] },
  { "Tuesday": [] },
  { "Wednesday": [1, 2, 3, 4, 5] },
  { "Thursday": [] },
  { "Friday": [1, 2, 3, 4, 5] }
]

function workoutSessionSetter(startDate, endDate, template, workout_id) {

  let d1 = new Date(startDate)
  let d2 = new Date(endDate)

  const date = new Date(d1.getTime());

  const dates = [];

  while (date <= d2) {
    let dayName = getDayName(date)
    let dateObj = new Date(date)

    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    const formatedDate = year + "-" + month + "-" + day;

    dates.push({ formatedDate, dayName });
    date.setDate(date.getDate() + 1);
  }

  let workoutArray = []
  let templateDayObject;
  let templateDayName;
  let templateExerciseArray;
  let exercise;


  for (let i = 0; i < template.length; i++) {
    templateDayObject = Object.keys(template[i])
    templateDayName = templateDayObject[0]
    templateExerciseArray = template[i][templateDayName]

    for (let j = 0; j < templateExerciseArray.length; j++) {
      exercise = templateExerciseArray[j]

      for (let k = 0; k < dates.length; k++) {
        if (templateDayName == dates[k].dayName) {
          workoutArray.push({
            workout_id: workout_id,
            exercise: exercise,
            date: dates[k].formatedDate,
            date_name: dates[k].dayName,
            complete: false
          })
        }
      }
    }
  }

  return workoutArray
}


function getDayName(date, locale = 'en-US') {
  return date.toLocaleDateString(locale, { weekday: 'long' });
}

function dateFormatter(date) {

  let d1 = new Date(date)

  let formattedDate = d1.getFullYear() + '-' +
    ('0' + (d1.getMonth() + 1)).slice(-2) + '-' +
    ('0' + d1.getDate()).slice(-2);

  return formattedDate.toString()
}

workoutSessionSetter("2022/10/10", "2022/11/20", beginnerTemplate, 1)

export { dateFormatter, workoutSessionSetter }


