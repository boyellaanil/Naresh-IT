function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (!dobInput) {
    result.textContent = "Please select a date of birth.";
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  // Future DOB
  if (dob > today) {
    const diffMs = dob - today;

    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
    const diffMinutes = Math.floor((diffMs / (1000 * 60)) % 60);
    const diffSeconds = Math.floor((diffMs / 1000) % 60);

    result.innerHTML = `
      Date of birth is in the future.<br>
      Time left: ${diffDays} days, ${diffHours} hours, ${diffMinutes} minutes, ${diffSeconds} seconds.
    `;
    return;
  }

  // Age in Years, Months, Days
  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate(); // Add number of days in previous month
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.textContent = `Your age is: ${years} years, ${months} months, ${days} days.`;
}
