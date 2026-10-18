function predictPeriod() {
    
    const todayInput = document.getElementById("todayDate").value;
    const lastPeriodInput = document.getElementById("lastPeriod").value;
    const cycleLength = Number(document.getElementById("cycleLength").value);

    if (

        !todayInput ||
        !lastPeriodInput ||
        !Number.isInteger(cycleLength) ||
        cycleLength < 1 ||
        cycleLength > 100
    ) {
        alert("Please input correct information.");
        return;
    }

    const today = new Date(todayInput + "T00:00:00");
    const lastPeriod = new Date(lastPeriodInput + "T00:00:00");
    const oneDay = 1000 * 60 * 60 * 24;

    if (lastPeriod > today) {
        alert("Please input correct information.");
        return;
    }

    const daysSinceLastPeriod = Math.floor((today - lastPeriod) / oneDay);

    document.getElementById("result").style.display = "block";

    if (daysSinceLastPeriod > cycleLength) {
        document.getElementById("resultTitle").textContent = "Unpredictable";
        document.getElementById("nextPeriod").textContent = "";
        document.getElementById("daysLeft").textContent = "";
        return;
    }

    const nextPeriod = new Date(lastPeriod);
    nextPeriod.setDate(nextPeriod.getDate() + cycleLength);

    const daysLeft = Math.ceil((nextPeriod - today) / oneDay);

    document.getElementById("resultTitle").textContent = "Your Prediction";

    document.getElementById("nextPeriod").textContent =
        "Next period: " + nextPeriod.toLocaleDateString();

    document.getElementById("daysLeft").textContent =
        "Days until your next period: " + daysLeft;
}