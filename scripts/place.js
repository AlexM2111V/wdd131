// Set current year
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

function calculateWindChill(temperature, windSpeed) {
    return (13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16))).toFixed(1);
}

function displayWindChill(tempCelsius, windSpeedKm) {
    const windChillElement = document.getElementById("windChill");

    if (tempCelsius <= 10 && windSpeedKm > 4.8) {
        const chill = calculateWindChill(tempCelsius, windSpeedKm);
        windChillElement.textContent = `${chill} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

let tempCelsius = 10;
let windSpeedKm = 5;

displayWindChill(tempCelsius, windSpeedKm);



