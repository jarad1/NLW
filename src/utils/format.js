const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação fisíca",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado" 
]

//funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function getWeekday(weekdayNumber) {
    const position = +weekdayNumber
    return weekdays[position]
}

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    getWeekday,
    convertHoursToMinutes
}