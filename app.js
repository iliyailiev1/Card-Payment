document.getElementById('number').addEventListener('input', function(event) {
    // Remove existing spaces and non-digit characters
    let input = event.target.value.replace(/\s+/g, '').replace(/[^0-9]/g, '');
  
    // Set a maximum limit of 20 digits
    
  
    // Add spaces after every 4 digits
    let formattedInput = input.replace(/(.{4})/g, '$1 ');
  
    // Update the input value with the formatted credit card number
    event.target.value = formattedInput;

  });
  const expirationSelect = document.querySelector("[data-expiration-year]")
const logo = document.querySelector("[data-logo]")



function onInputChange(input, newValue) {
  const start = input.selectionStart
  const end = input.selectionEnd
  updateInputValue(input, newValue, start, end)
  focusInput(input, newValue.length + start)
  const firstFour = input
    .closest("[data-connected-inputs]")
    .querySelector("input").value

  if (firstFour.startsWith("4")) {
    logo.src = "visa.svg"
  } else if (firstFour.startsWith("5")) {
    logo.src = "mastercard.svg"
  }
}
