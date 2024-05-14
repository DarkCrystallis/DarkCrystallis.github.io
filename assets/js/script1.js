// Wait for the DOM content to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function() {
  // Fetch cat data from JSON file
  fetch('assets/json/cat_data.json')
    .then(response => response.json()) // Parse response as JSON
    .then(data => {
      const cats = data.cats; // Extract cat data from JSON
      const insertDiv = document.querySelector('.insert'); // Select container to insert cat cards
      let count = 0; // Track the number of cards added

      // Iterate over each cat in the data
      cats.forEach(cat => {
        // Create a new card element for each cat
        const catCard = document.createElement('div');
        catCard.classList.add('col-md-4', 'mb-4'); // Add Bootstrap classes for styling

        // Populate the card with cat data
        catCard.innerHTML = `
          <div class="cat-card card p-3 mx-2 shadow">
            <img src="${cat.image}" class="card-img-top" alt="Cat Image">
            <div class="card-body">
              <h5 class="card-title fs-5 fw-bold text-center text-uppercase">${cat.name}</h5>
              <p class="card-text fs-6">
                <span class="fw-semibold">Age:</span> <span class="age fw-light">${cat.age}</span><br>
                <span class="fw-semibold">Gender:</span> <span class="gender fw-light">${cat.gender}</span><br>
                <span class="fw-semibold">Description:</span> <span class="description fw-light">${cat.description}</span>
              </p>
            </div>
          </div>
        `;

        // Append the card to the container
        insertDiv.appendChild(catCard);
        
        // Increment the card count
        count++;

        // Start a new row every third card
        if (count % 3 === 0) {
          const newRow = document.createElement('div');
          newRow.classList.add('w-100'); // Ensure each row starts on a new line
          insertDiv.appendChild(newRow);
        }
      });
    })
    .catch(error => {
        // Handle errors by displaying an alert
        alert('Error fetching cat data. Please try again later.');
    });
});
