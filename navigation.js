// Connects the Menu button to the navigation menu matching the aria-controls attribute: aria-controls="primary-nav".
const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

// Opens and closes navigation menu.
document.documentElement.classList.add("js");
button.hidden = false;
list.dataset.open = "false";

// Opens and closes navigation menu when clicked, tapped or focused with keyboard and Enter key or Spacebar is pressed.
function setMenu(open) {
  button.setAttribute("aria-expanded", String(open));
  list.dataset.open = String(open);
}

// Toggle the navigation menu open/closed when the mouse is clicked; via aria-expanded true/false.
button.addEventListener("click", () => {
  setMenu(button.getAttribute("aria-expanded") !== "true");
});

// Closes navigation menu when the Escape key is pressed and returns focus to Menu button.
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    button.getAttribute("aria-expanded") === "true"
  ) {
    setMenu(false);
    button.focus();
  }
});

// TODO 1: progressively enhance the document and initialize the narrow state.

// TODO 2: write one named function that keeps aria-expanded and visible state synchronized.

// TODO 3: use the native button's click event to toggle the state.

// TODO 4: close on Escape when open, then return focus to the button.

// Add a comment above every logical step explaining what it does and why it is needed.
