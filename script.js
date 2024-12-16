function convert() {
  let temperature = parseFloat(document.getElementById("temperature").value);
  let conversion = document.getElementById("conversion").value;

  // Check if temperature is entered and if a conversion is selected
  if (isNaN(temperature) || !conversion) {
    document.getElementById("result").innerText =
      "Enter temperature and choose a conversion.";
    return;
  }

  let convertedValue;
  let degrees;
  let resultUnit;

  // Choose the conversion type based on the selection
  if (conversion === "Celsius-Fahrenheit") {
    convertedValue = (temperature * 9) / 5 + 32;
    degrees = "°C";
    resultUnit = "°F";
  } else {
    convertedValue = ((temperature - 32) * 5) / 9;
    degrees = "°F";
    resultUnit = "°C";
  }

  // Display the result
  document.getElementById("resultText").innerText = "RESULT";
  document.getElementById(
    "result"
  ).innerText = `${temperature}${degrees} = ${convertedValue.toFixed(
    0
  )}${resultUnit}`;
}

// Function to reset input fields and result display
function resetFields() {
  document.getElementById("temperature").value = "";
  document.getElementById("conversion").value = "";
  document.getElementById("resultText").innerText = "";
  document.getElementById("result").innerText = "";
}
