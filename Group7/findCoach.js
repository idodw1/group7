function searchCoaches() {
    // Dummy data for demonstration
    var coaches = [
        { name: "John Doe", rating: 4, id: 1 },
        { name: "Jane Smith", rating: 5, id: 2 },
        // Add more coaches as needed
    ];

    // Display search results
    var searchResultsDiv = document.getElementById("search-results");
    searchResultsDiv.innerHTML = ""; // Clear previous results

    coaches.forEach(function(coach) {
        // Create coach row
        var coachRow = document.createElement("div");
        coachRow.classList.add("coach-row");

        // Create checkbox
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        coachRow.appendChild(checkbox);

        // Create coach info
        var coachInfo = document.createElement("div");
        coachInfo.classList.add("coach-info");

        // Create coach name
        var coachName = document.createElement("span");
        coachName.textContent = coach.name;
        coachInfo.appendChild(coachName);

        // Create spacing for consistent alignment
        var spacing = document.createElement("span");
        spacing.style.flexGrow = "1"; // Take up remaining space
        coachInfo.appendChild(spacing);

        // Create stars based on rating
        var stars = document.createElement("span");
        stars.classList.add("stars");
        for (var i = 0; i < coach.rating; i++) {
            var star = document.createElement("span");
            star.textContent = "★";
            stars.appendChild(star);
        }
        coachInfo.appendChild(stars);

        // Create "Learn more" button
        var learnMoreButton = document.createElement("button");
        learnMoreButton.textContent = "Learn More";
        coachInfo.appendChild(learnMoreButton);

        // Create "Add to Favorites" button
        var addToFavoritesButton = document.createElement("button");
        addToFavoritesButton.textContent = "Add to Favorites";
        coachInfo.appendChild(addToFavoritesButton);

        coachRow.appendChild(coachInfo);

        searchResultsDiv.appendChild(coachRow);
    });

    // Create "Choose" button
    var chooseButton = document.createElement("button");
    chooseButton.textContent = "Choose";
    searchResultsDiv.appendChild(chooseButton);
}
