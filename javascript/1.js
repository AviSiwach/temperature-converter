function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");

    if (celsiusInput.value === "") {
      fahrenheitInput.value = "";
    } else {
      const celsius = parseFloat(celsiusInput.value);
      const fahrenheit = (celsius * 9/5) + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
    }
  }

  function clearFields() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
  }