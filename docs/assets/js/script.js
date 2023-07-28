// script.js
// Function to toggle the visibility of the profile and repositories sections
//
// This function determines which container is currently hidden and which one is visible,
// and then toggles the visibility of the two containers accordingly.
// The function also uses a delay to allow the animations to start before the "hidden" class is toggled.
function toggleSections() {
  var profileContainer = document.getElementById("profile");
  var repositoriesContainer = document.getElementById("repositories");

  // Determine which container is currently hidden and which one is visible
  var isProfileHidden = profileContainer.classList.contains("hidden");
  var isRepositoriesHidden = repositoriesContainer.classList.contains("hidden");

  // If both containers are hidden, show the profile container
  if (isProfileHidden && isRepositoriesHidden) {
    profileContainer.classList.remove("hidden");
    profileContainer.classList.add("slide-in-left");
  }
  // If profile container is visible, hide it and show the repositories container
  else if (!isProfileHidden && isRepositoriesHidden) {
    profileContainer.classList.add("slide-out-center");
    repositoriesContainer.classList.remove("hidden");
    repositoriesContainer.classList.add("slide-in-right");
    repositoriesContainer.addEventListener("animationend", function () {
      repositoriesContainer.classList.toggle("hidden");
    });
  }
  // If repositories container is visible, hide it and show the profile container
  else {
    profileContainer.classList.remove("hidden");
    profileContainer.classList.add("slide-in-left");
    repositoriesContainer.classList.add("slide-out-center");
    repositoriesContainer.addEventListener("animationend", function () {
      repositoriesContainer.classList.toggle("hidden");
    });
  }// Function to toggle the visibility of the profile and repositories sections
function toggleSections() {
  var profileContainer = document.getElementById("profile");
  var repositoriesContainer = document.getElementById("repositories");

  // Determine which container is currently hidden and which one is visible
  var isProfileHidden = profileContainer.classList.contains("hidden");
  var isRepositoriesHidden = repositoriesContainer.classList.contains("hidden");

  // If both containers are hidden, show the profile container
  if (isProfileHidden && isRepositoriesHidden) {
    profileContainer.classList.remove("hidden");
    profileContainer.classList.add("slide-in-left");
  }
  // If profile container is visible, hide it and show the repositories container
  else if (!isProfileHidden && isRepositoriesHidden) {
    profileContainer.classList.add("slide-out-center");
    repositoriesContainer.classList.remove("hidden");
    repositoriesContainer.classList.add("slide-in-right");
  }
  // If repositories container is visible, hide it and show the profile container
  else {
    profileContainer.classList.remove("hidden");
    profileContainer.classList.add("slide-in-left");
    repositoriesContainer.classList.add("slide-out-center");
  }

  // Toggle the "hidden" class for both containers after a delay to allow animations to start
  setTimeout(function () {
    profileContainer.classList.toggle("hidden");
    repositoriesContainer.classList.toggle("hidden");
  }, 100); // Adjust the delay as needed
}

// Add event listener to the button for toggling sections
document.querySelector(".icon-button").addEventListener("click", toggleSections);

// Add event listener to the "Back to Profile" link inside the repositories container
document
  .querySelector(".repository-list a[href='#profile']")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    toggleSections(); // Toggle the sections visibility
  });


  // Toggle the "hidden" class for both containers after a delay to allow animations to start
  setTimeout(function () {
    profileContainer.classList.toggle("hidden");
    repositoriesContainer.classList.toggle("hidden");
  }, 100); // Adjust the delay as needed
}

// Add event listener to the button for toggling sections
document.querySelector(".icon-button").addEventListener("click", toggleSections);

// Add event listener to the "Back to Profile" link inside the repositories container
document
  .querySelector(".repository-list a[href='#profile']")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    toggleSections(); // Toggle the sections visibility
  });
