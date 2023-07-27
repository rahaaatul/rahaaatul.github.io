// script.js
// Get the elements for profile card and repositories container
const profileCard = document.getElementById("profile");
const repositoriesContainer = document.getElementById("repositories");

// Function to show the profile card and hide repositories container
function showProfile() {
    repositoriesContainer.classList.add("slideLeftFadeOut");
    profileCard.classList.add("slideRightFadeIn");

    repositoriesContainer.addEventListener("animationend", () => {
        repositoriesContainer.style.display = "none";
        repositoriesContainer.classList.remove("slideLeftFadeOut");
    });
    profileCard.addEventListener("animationend", () => {
        profileCard.style.display = "block";
        profileCard.classList.remove("slideRightFadeIn");
    });
}

// Function to show the repositories container and hide profile card
function showRepositories() {
    profileCard.classList.add("slideRightFadeOut");
    repositoriesContainer.classList.add("slideLeftFadeIn");

    profileCard.addEventListener("animationend", () => {
        profileCard.style.display = "none";
        profileCard.classList.remove("slideRightFadeOut");
    });
    repositoriesContainer.addEventListener("animationend", () => {
        repositoriesContainer.style.display = "block";
        repositoriesContainer.classList.remove("slideLeftFadeIn");
    });
}
