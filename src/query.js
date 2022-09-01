let startDate = "2022/10/4"
let endDate = '2022/10/20'


let date = new Date(startDate)


let beginner = [
    {"Monday": ["bench press", "pressups", "shoulder press", "bicep curls"]},
    {"Tuesday": []},
    {"Wednesday": ["situps", "tricep extensions", "dips"]},
    {"Thursday": []},
    {"Friday": ["bench press", "pressups", "shoulder press", "bicep curls"]}
]

dateArray("2022/10/4", '2022/10/20')

function dateArray(startDate, endDate){
    
    let d1 = new Date(startDate)
    let d2 = new Date(endDate)

    const date = new Date(d1.getTime());

    const dates = [];

    while (date <= d2) {
        let dayName = getDayName(date)
        let dateObj = new Date(date)
        dates.push({dateObj, dayName});
        date.setDate(date.getDate() + 1);
      }

      let template = [
        {"Monday": ["bench press", "pressups", "shoulder press", "bicep curls"]},
        {"Tuesday": []},
        {"Wednesday": ["situps", "tricep extensions", "dips"]},
        {"Thursday": []},
        {"Friday": ["bench press", "pressups", "shoulder press", "bicep curls"]}
    ]

        let workoutArray = []
        let templateDayObject;
        let templateDayName;
        let templateExerciseArray;
        let exercise;

 
      for(i = 0; i < template.length; i++){
          (template.length)
          templateDayObject = Object.keys(template[i])
          templateDayName = templateDayObject[0]
          templateExerciseArray = template[i][templateDayName]
          (templateDayObject)
        
        for(j=0; j < templateExerciseArray.length; j++){
            (templateExerciseArray[j])
            exercise = templateExerciseArray[j]

            for(k=0; k < dates.length; k++){
                if(templateDayName == dates[k].dayName){
                    workoutArray.push({dayName: dates[k].dayName, date: dates[k].dateObj, exericse: exercise, sets: 0, reps: 0, weight: 0})
             }
          }
        }
    }
    (workoutArray)
    return workoutArray
}


function getDayName(date, locale = 'en-US') {
    return date.toLocaleDateString(locale, {weekday: 'long'});
  }




