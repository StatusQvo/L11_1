const getRightMonth = (ourMonth)=>{
   return String(ourMonth).length === 1 ? `0+${ourMonth}` : String(ourMonth)
}

const getDateFormat = (ourDate) => {
    if (!(ourDate instanceof Date)) {
        return "введенный параметр должен быть датой"
    }
    let rightMonth =  getRightMonth(ourDate.getMonth()+1)
    const TimeArr = [ourDate.getDate(),rightMonth,ourDate.getFullYear()]
    return TimeArr.join('.')
}

console.log(getDateFormat(new Date()))

