

function AmountOfDays() {


    const startDate = new Date(`March 21, 2022`);
    const todaysDate = new Date();
    const dateDifference = (todaysDate - startDate);

    let differenceDays = Math.floor(dateDifference / (1000 * 60 * 60 * 24)) // Mili/1000 = Seconds/60 = Minutes/60 = Hours/24 = Days (Floored to even #)

    return differenceDays;
}