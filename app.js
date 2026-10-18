function predictPeriod() {
    const periodLength = Number(document.getElementById("periodLength").value);
    const todayDay = Number(document.getElementById("todayDay").value);
    const lastPeriodInput = document.getElementById("lastPeriod").value;
    const cycleLength = Number(document.getElementById("cycleLength").value);

    if (!Number.isInteger(periodLength) || periodLength < 1 || periodLength > 14) {
        alert("Please enter another input or contact medical help.");
        return;
    }

    if (!Number.isInteger(todayDay) || todayDay < 1 || todayDay > 31) {
        alert("Please enter a day from 1 to 31.");
        return;
    }

    if (!lastPeriodInput) {
        alert("Please enter when your last period started.");
        return;
    }

    if (!Number.isInteger(cycleLength) || cycleLength < 1 || cycleLength > 100) {
        alert("Please enter a menstrual cycle length from 1 to 100 days.");
        return;
    }

    const lastPeriod = new Date(lastPeriodInput + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const nextPeriod = new Date(lastPeriod);
    nextPeriod.setDate(nextPeriod.getDate() + cycleLength);

    const periodEnd = new Date(nextPeriod);
    periodEnd.setDate(periodEnd.getDate() + periodLength - 1);

    const oneDay = 1000 * 60 * 60 * 24;
    const daysLeft = Math.max(0, Math.ceil((nextPeriod - today) / oneDay));

    document.getElementById("nextPeriod").textContent =
        "Next period: " + nextPeriod.toLocaleDateString();

    document.getElementById("periodEnds").textContent =
        "Your period should last about " + periodLength + " days.";

    document.getElementById("daysLeft").textContent =
        "Days until your next period: " + daysLeft;

    document.getElementById("result").style.display = "block";
}