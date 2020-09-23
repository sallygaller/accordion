function leapYear(year) {
    if (year < 1582) {
        throw Error (console.log("Nope!"))
    }
    const div400 = year % 400 === 0;
    const div100 = year % 100 === 0;
    const div4 = year % 4 === 0;
    // true if the year is divisible by 400, or if year is divisible by 4 AND NOT 100. 
    return div400 || (div4 && !div100);
}

// The next line makes the function available to other JavaScript modules
// This is necessary for the test code to be able to run this function
export default leapYear;