function celsiusToFahrenheit(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
  }
  
  function convertTemperature() {
    let temperature = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;
  
    if (unit === "Celsius") {
      let fahrenheitTemp = celsiusToFahrenheit(temperature);
      document.getElementById("result").innerHTML = temperature + " degrees Celsius is equal to " + fahrenheitTemp + " degrees Fahrenheit";
    } else if (unit === "Fahrenheit") {
      let celsiusTemp = fahrenheitToCelsius(temperature);
      document.getElementById("result").innerHTML = temperature + " degrees Fahrenheit is equal to " + celsiusTemp + " degrees Celsius";
    } else {
      document.getElementById("result").innerHTML = "Invalid unit entered!";
    }
  }
  