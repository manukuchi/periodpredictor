// Predicts the user's next period
function predictPeriod() {

    // Get answers from the inputs
    const periodLength = Number(document.getElementById("periodLength").value);
    const lastPeriodInput = document.getElementById("lastPeriod").value;
    const cycleLength = Number(document.getElementById("cycleLength").value);

    // Make sure required questions are answered
    if (!periodLength || !lastPeriodInput || !cycleLength) {
        alert("Please answer all the questions!");
        return;
    }

    // Create dates
    const lastPeriod = new Date(lastPeriodInput + "T00:00:00");
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    // Calculate next period
    const nextPeriod = new Date(lastPeriod);
    nextPeriod.setDate(nextPeriod.getDate() + cycleLength);

    // Calculate when period should end
    const periodEnd = new Date(nextPeriod);
    periodEnd.setDate(periodEnd.getDate() + periodLength - 1);

    // Calculate days until next period
    const oneDay = 1000 * 60 * 60 * 24;
    const daysLeft = Math.max(
        0,
        Math.ceil((nextPeriod - today) / oneDay)
    );

    // Calculate cycle progress
    const daysPassed = Math.floor((today - lastPeriod) / oneDay);

    const progress = Math.min(
        100,
        Math.max(0, (daysPassed / cycleLength) * 100)
    );

    // Display the results
    document.getElementById("nextPeriod").textContent =
        "Next period: " + nextPeriod.toLocaleDateString();

    document.getElementById("periodEnds").textContent =
        "Your period should last about " + periodLength + " days.";

    document.getElementById("daysLeft").textContent =
        "Days until your next period: " + daysLeft;

    document.getElementById("progress").style.width = progress + "%";

    document.getElementById("progressText").textContent =
        Math.round(progress) + "% through your cycle";

    // Make the result box appear
    document.getElementById("result").style.display = "block";
}