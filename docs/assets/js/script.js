// Variable to control whether animations should be applied
var animatePage = true;

// Function to toggle the visibility of the profile and repositories sections
function toggleSections() {
  var profileContainer = document.getElementById("profile");
  var repositoriesContainer = document.getElementById("repositories");

  // Check the initial state of the containers
  var isProfileHidden = profileContainer.classList.contains("hidden");
  var isRepositoriesHidden = repositoriesContainer.classList.contains("hidden");

  // Show both containers initially
  profileContainer.style.display = "block";
  repositoriesContainer.style.display = "block";

  // Toggle the "hidden" class for both containers
  profileContainer.classList.toggle("hidden");
  repositoriesContainer.classList.toggle("hidden");

  // Apply the animations only if animatePage flag is true
  if (animatePage) {
    if (!isProfileHidden && isRepositoriesHidden) {
      // Profile is visible, repositories are hidden
      profileContainer.classList.remove("slide-out-center");
      profileContainer.classList.add("slide-in-left");
    } else if (isProfileHidden && !isRepositoriesHidden) {
      // Repositories are visible, profile is hidden
      repositoriesContainer.classList.remove("slide-out-center-repo");
      repositoriesContainer.classList.add("slide-in-right-repo");
    } else if (isProfileHidden && isRepositoriesHidden) {
      // Both are hidden, show profile (you can adjust which one to show first)
      profileContainer.style.display = "block";
      profileContainer.classList.remove("slide-out-center");
      profileContainer.classList.add("slide-in-left");
    } else {
      // Both are visible, hide repositories
      repositoriesContainer.classList.remove("slide-in-right");
      repositoriesContainer.classList.add("slide-out-center-repo");
    }
  }

  // Hide the profile and repositories containers
  if (profileContainer.classList.contains("hidden")) {
    profileContainer.style.display = "none";
  }
  if (repositoriesContainer.classList.contains("hidden")) {
    repositoriesContainer.style.display = "none";
  }
}

// Rest of the script remains unchanged

// Function to handle the "Repositories" button click event
function onRepositoriesButtonClick(event) {
  event.preventDefault(); // Prevent the default link behavior
  toggleSections(); // Toggle the sections visibility
}

// Function to handle the "Back to Profile" link click event
function onBackToProfileLinkClick(event) {
  event.preventDefault(); // Prevent the default link behavior
  toggleSections(); // Toggle the sections visibility
}

// Add event listener to the "Repositories" button
document.querySelector(".icon-button").addEventListener("click", onRepositoriesButtonClick);

// Add event listener to the "Back to Profile" link inside the repositories container
document
  .querySelector(".repository-list a[href='#profile']")
  .addEventListener("click", onBackToProfileLinkClick);

// NOTE: The lines below have been commented out to make both sections visible from the start.
// If you want to hide one of the sections initially, uncomment the appropriate line.

// document.getElementById("profile").classList.add("hidden"); // Hide the profile initially
document.getElementById("repositories").classList.add("hidden"); // Hide the repositories initially
