// script.js
// Function to toggle the visibility of the profile and repositories sections
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
    repositoriesContainer.classList.add("slide-out-right");
  }

  // Toggle the "hidden" class for both containers after a delay to allow animations to start
  setTimeout(function () {
    profileContainer.classList.toggle("hidden");
    repositoriesContainer.classList.toggle("hidden");
  }, 100); // Adjust the delay as needed
}

// Add event listener to the parent element of the button for delegated event handling
document.querySelector(".social-links").addEventListener("click", function (event) {
  // Check if the click target is the button with the class "icon-button"
  if (event.target.classList.contains("icon-button")) {
    toggleSections();
  }
});
