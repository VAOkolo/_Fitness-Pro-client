const startDate = "2022/10/4"
const endDate = "2022/10/20"
const date = new Date(startDate)
const dateSetsArray = [];

const beginner = {
  Monday: [{ "bench press": [0, 0] }, "pressups"],
  Wednesday: ["rest"],
  Friday: ["situps", "pressups"],
}

function dayNameHelper(formatedDate, locale = 'en-US') {
  return formatedDate.toLocaleDateString(locale, { weekday: 'long' });
}

function dateSets(startDate, endDate, template) {
  const d1 = new Date(startDate)
  const d2 = new Date(endDate)
  const date = new Date(d1.getTime());

  while (date <= d2) {
    const dayName = dayNameHelper(date)
    const dateDate = new Date(date)

    // FORMATING DATE
    let month = dateDate.getUTCMonth() + 1;
    let day = dateDate.getUTCDate();
    let year = dateDate.getUTCFullYear();
    const formatedDate = year + "/" + month + "/" + day;


    dateSetsArray.push({ formatedDate, dayName });
    date.setDate(date.getDate() + 1);
  }

  dateSetsArray.map((key) => {
    key['exercises'] = template[key.dayName]
  })
}

function lobbyCodeGenerator() {
  let result = "";
  let characters = 'abcdefghijklmnopqrstuvwxyz123456789';
  let charactersLength = 9;
  for (let i = 0; i < charactersLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

dateSets(startDate, endDate, beginner)
console.log(dateSetsArray)
console.log(lobbyCodeGenerator())

