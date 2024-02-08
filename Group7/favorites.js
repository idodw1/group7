// Dummy data for demonstration
var favoriteCoaches = [
    { name: "John Doe", rating: 4, classType: "Cardio" },
    { name: "Jane Smith", rating: 5, classType: "Weight Lifting" },
    // Add more favorite coaches as needed
];

// Function to display favorite coaches
function displayFavoriteCoaches() {
    var favoritesList = document.getElementById("favorites-list");

    // Clear previous content
    favoritesList.innerHTML = "";

    // Loop through favorite coaches and create HTML for each
    favoriteCoaches.forEach(function(coach) {
        // Create coach row
        var coachRow = document.createElement("div");
        coachRow.classList.add("favorite-coach");

        // Create bullet
        var bullet = document.createElement("span");
        bullet.textContent = "*";
        coachRow.appendChild(bullet);

        // Create coach name
        var coachName = document.createElement("span");
        coachName.classList.add("coach-name");
        coachName.textContent = coach.name;
        coachRow.appendChild(coachName);

        // Create stars based on rating
        var stars = document.createElement("span");
        stars.classList.add("stars");
        for (var i = 0; i < coach.rating; i++) {
            var star = document.createElement("span");
            star.textContent = "★";
            stars.appendChild(star);
        }
        coachRow.appendChild(stars);

        // Create "Learn More" button
        var learnMoreButton = document.createElement("button");
        learnMoreButton.classList.add("learn-more-button");
        learnMoreButton.textContent = "Learn More";
        coachRow.appendChild(learnMoreButton);

        // Create class type
        var classType = document.createElement("span");
        classType.classList.add("class-type");
        classType.textContent = coach.classType;
        coachRow.appendChild(classType);

        // Create "Delete" button
        var deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "Delete";
        coachRow.appendChild(deleteButton);

        // Append coach row to favorites list
        favoritesList.appendChild(coachRow);
    });
}

// Call the function to display favorite coaches when the page loads
displayFavoriteCoaches();
