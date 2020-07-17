
const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function nihorec(myString) {

    // Split (old) parts with the '-' character:
    const parts = myString.split('-');
    // Validate for correct parts length:
    if (parts.length != 3)
        throw new Error(`BAD DATE STRING: ${myString}`)
    // Validate for correct month:
    var monthNumber = parseInt(parts[1]);
    if (!validateMonth(monthNumber))
        throw new Error(`BAD MONTH: ${parts[1]}`)
    // Validate for correct day of month:
    var dayNumber = parseInt(parts[2]);
    if (!validateDayOfMonth(monthNumber, dayNumber))
        throw new Error(`BAD DAY OF MONTH: Day ${parts[2]} in month ${parts[1]}`);
    // Convert for correct year:
    const year = letterToYear(parts[0])
    // Return correct date with the new parts:
    const newParts = [year, parts[1], parts[2]].join("-")

    console.log(newParts)
}
function letterToYear(letter) {
    // This will switch out the letter and replace it with its corresponding year:
    switch (letter) {
        case 'N': return "1984";
        case 'I': return "1985";
        case 'H': return "1986";
        case 'O': return "1987";
        case 'R': return "1988";
        case 'E': return "1989";
        case 'C': return "1990";
        case 'D': return "1991";
        case 'K': return "1992";
        default:
            throw new Error(`BAD LETTER: ${letter}`)

    }
}

function validateDayOfMonth(month, day) {
    // Says that maxDays of a month is the monthLengths of the month before it:
    const maxDays = monthLengths[month - 1]
    // Checks if the day number is more than maxDays -- if so, an error will appear and false will be returned:
    if (day > maxDays)
        return false;
    return true;

}

function validateMonth(month) {
    // Checks if the month number is more than 0 and less than 13:
    if (month > 0 && month < 13)
        return true;
    return false;

}

function isLeapYear(year) {
    // Checks if a year is divisible by 4, 100, AND 400 -- if so, it is a leap year:
    if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0)
        return true;
    return false;

}

// Testing and calling the 'nihorec' function:
nihorec('N-2-27')
nihorec('I-2-27')
nihorec('H-2-27')
nihorec('O-2-27')
nihorec('R-2-27')
nihorec('E-2-27')
nihorec('C-2-27')
nihorec('D-2-27')
nihorec('K-2-27')

// Testing and calling the 'isLeapYear' function:
isLeapYear(1971)