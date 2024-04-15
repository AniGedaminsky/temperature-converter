//ეს ფუნქცია არის ცელსიუსის საკონვერტაციოდ ფარენგეიტში

function celsiusToFahrenheit() {
    var celsiusInput = document.getElementById("celsius").value;
    var fahrenheitOutput = (celsiusInput * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheitOutput.toFixed(4);
    console.log("Hello Children");
}

//ეს ფუნქცია არის ფარენგეიტის საკონვერტაციოდ ცელსიუსში

function fahrenheitToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit").value;
    var celsiusOutput = (fahrenheitInput - 32) * 5/9;
    document.getElementById("celsius").value = celsiusOutput.toFixed(5);
    console.log("Hello Children");
}
