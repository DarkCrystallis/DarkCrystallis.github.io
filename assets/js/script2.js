// Wait for the DOM content to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function() {
  // Select the form element
  const form = document.querySelector('form');

  // Add event listener for form submission
  form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Validate form fields
    const cat = document.getElementById('cat').value.trim();
    const name = document.getElementById('name').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zip = document.getElementById('zip').value.trim();
    const home_type = document.getElementById('home_type').value.trim();
    const household_members = document.getElementById('household_members').value.trim();
    const children_under_18 = document.querySelector('input[name="children_under_18"]:checked'); // Get the checked radio button

    // Perform validation by checking if any field is empty
    if (cat === '' || name === '' || dob === '' || email === '' || phone === '' || address === '' || city === '' || state === '' || zip === '' || home_type === '' || household_members === '' || children_under_18 === '' ) {
      // If any field is empty, prevent form submission
      return false;
    }

    // If all fields are filled, display a thank you message
    alert('Thank you for applying!');

    // Allow the form to be submitted
    return true;
  });
});
