// Function to display the current time
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Format time as HH:MM:SS
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Display the time
    clockElement.textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display clock immediately on load
updateClock();
