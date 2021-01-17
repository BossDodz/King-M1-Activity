const contactsList = document.querySelector(".boxes"); // List of emails
const listOverlay = document.querySelector(".list-overlay");

// Email copy event
contactsList.addEventListener("click", (e) => {
  var selected;
  var x = e.target.parentNode.childNodes[1]; // get overlay
  var y = e.target.firstChild; // get child node of list-item
  var val = y.textContent; // get value of child node

  console.log(e, x, y, val);
  // if targeted item is list-item
  if (e.target.className === "list-item") {
    // select selected class for the list-overlay class, if it exists
    selected = document.querySelector("list-overlay.selected");
    // if it exists, set the class name to " "
    if (selected) {
      selected.className = "";
    }
    // add selected class to target overlay class
    x.classList.add("selected");
    setTimeout(() => {
      x.classList.remove("selected");
    }, 1500);

    // Copy to clipboard
    var tempArea = document.createElement("textarea");
    document.body.appendChild(tempArea);
    tempArea.value = val;
    tempArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempArea);
  }
});
