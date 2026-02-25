// DOM VARIABLES
// EVENT LISTENERS

/* =======================================
    4. HERO SECTION
   ======================================= */
// HOME Page Toggle BUTTONS

// ...Button "New Goal"...
// this button changes text content in h3 elem in the Hero section
const changeTextBtn = document.getElementById("change-text-toggle-btn");
const changeText = document.getElementById("change-text-toggle-content");
// CLICK EVENT
if (changeTextBtn && changeText) {
    /* if (element) safety check. 
    It prevents JavaScript from crashing on pages where these elements don't exist 
    (like about.html or contact.html), which is a common issue in multi-page sites 
    sharing a single app.js. Wrap those in if (element) statements, so your console 
    doesn't show errors when visiting pages other than the Home page. */
    changeTextBtn.addEventListener('click', () => {
        const current = (changeText.textContent || "").trim();
        if (current.includes("Let's help your business grow!")) {
            changeText.textContent = "Let's plan a new great goal!";
        } else {
            changeText.textContent = "Let's help your business grow!";
        }
    });
}

// ...Button "Some Color"...
// this button changes text style in h1 elem in the Hero section
const changeTextColorBtn = document.getElementById("change-textcolor-toggle-btn");
const changeTitle = document.getElementById("change-title-toggle-content");
// CLICK EVENT
if (changeTextColorBtn && changeTitle) { // if (element) safety check. 
    //1. Create a variable to keep track of the current state
    let isColorChanged = false;
    changeTextColorBtn.addEventListener('click', () => {   
        if (!isColorChanged) {
            // Apply the new styles (Note: removed semicolons inside the quotes!) 
            // use CSS variables already defined in :root  
            changeTitle.style.color = "var(--clr-accent)";
            changeTitle.style.textShadow = "1px 1px 2px var(--clr-dark-shadow)";
            // and Update the current state variable
            isColorChanged = true;
        } else {
            // Revert back to the original styles
            changeTitle.style.color = "var(--clr-text-main)";
            changeTitle.style.textShadow = "1px 1px 2px var(--clr-accent-shadow)";
            // and Update the current state variable
            isColorChanged = false;
        }
    });
}

// ...Button "Rename"... 
// this button changes text content in h1 elem in the Hero section
const changeTitleBtn = document.getElementById("change-title-toggle-btn");
// CLICK EVENT
if (changeTitleBtn && changeTitle) {
    // if (element) safety check.
    changeTitleBtn.addEventListener('click', () => {
        //1. Create a variable to keep track of the current state
        const current = (changeTitle.textContent || "").trim();
        if (current.includes("Strategic Creativity")) {
            // Apply the new text
            changeTitle.textContent = "Branding and Design Agency";
        } else {
            // Revert back to the original text
            changeTitle.textContent = "Strategic Creativity";
        }
    });
}

// ...Button "Show Emojis"... 
// shows invisible p elem under headings in the Hero section
const showEmojisBtn = document.getElementById("displ-emojis-toggle-btn");
const emojis = document.getElementById("emojis-toggle-content");
// CLICK EVENT
if (showEmojisBtn && emojis) {
    /* 1. Create a variable to keep track of the current state */
    let isVisibilityVisible = false;
    showEmojisBtn.addEventListener('click', () => {
        if (!isVisibilityVisible) {
            /* Apply the new styles */
            emojis.style.visibility = "visible";
            /* Update the state */
            isVisibilityVisible = true;
        } else {
            /* Revert back to the original styles */
            emojis.style.visibility = "hidden";
            /* Update the state */
            isVisibilityVisible = false;
        }
    });
}

// ...Button "Add Text"... 
// shows invisible h1 elem under toggle buttons in the Hero section
const addTextBtn = document.getElementById("addtext-toggle-btn");
const addTextContent = document.getElementById("addtext-toggle-content");
// CLICK EVENT
if (addTextBtn && addTextContent) {
    /* 1. Create a variable to keep track of the current state */
    let isVisibilityChanged = false;
    addTextBtn.addEventListener('click', () => {
        if (!isVisibilityChanged) {
            /* Apply the new styles */
            addTextContent.style.display = "block";
            /* Update the state */
            isVisibilityChanged = true;
        } else {
            /* Revert back to the original styles */
            addTextContent.style.display = "none";
            /* Update the state */
            isVisibilityChanged = false;
        }
    });
}

// ...Button "Secret"... 
// shows invisible Secret message under toggle buttons in the Hero section
const secretMessageBtn = document.getElementById("secretmessage-toggle-btn");
const secretMessage = document.getElementById("secret-message-toggle-content");
// CLICK EVENT
if (secretMessageBtn && secretMessage) {
   let isVisibilityChanged = false;
   secretMessageBtn.addEventListener('click', () => {
      if (!isVisibilityChanged) {
        secretMessage.style.visibility = "visible";
        isVisibilityChanged = true;
      } else {
        secretMessage.style.visibility = "hidden";
        isVisibilityChanged = false;
      }
   });
}
// HOME Page Toggle BUTTONS end





// MOUSEOVER EVENT


/* =======================================
    7. CONTACT SECTION
   ======================================= */
// CONTACT FORM BUTTON
const submitMessageBtn = document.getElementById("submit-message");
const submitParagraph = document.getElementById("form-submit-message");
const contactForm = document.getElementById("contact-form");
// CLICK EVENT
