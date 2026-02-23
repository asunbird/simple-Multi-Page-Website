// DOM VARIABLES
// EVENT LISTENERS

/* =======================================
    4. HERO SECTION
   ======================================= */
// HOME Page BUTTONS

// ...Button "New Goal"...
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
const changeTextColorBtn = document.getElementById("change-textcolor-toggle-btn");
const changeTitle = document.getElementById("change-title-toggle-content");
// CLICK EVENT
if (changeTextColorBtn && changeTitle) {
     /* if (element) safety check. */
     /* 1. Create a variable to keep track of the current state */
     let isColorChanged = false;
    changeTextColorBtn.addEventListener('click', () => {
        
        if (!isColorChanged) {
            /* Apply the new styles (Note: removed semicolons inside the quotes!) */
            /* use CSS variables already defined in :root */
            changeTitle.style.color = "var(--clr-accent)";
            changeTitle.style.textShadow = "1px 1px 2px var(--clr-dark-shadow)";

            /* Update the state */
            isColorChanged = true;
        } else {
            /* Revert back to the original styles */
            changeTitle.style.color = "var(--clr-text-main)";
            changeTitle.style.textShadow = "1px 1px 2px var(--clr-accent-shadow)";

            /* Update the state */
            isColorChanged = false;
        }
    });
}


// ...Button "Rename"... 
const changeTitleBtn = document.getElementById("change-title-toggle-btn");
// CLICK EVENT
changeTitleBtn.addEventListener("click", function() {
    changeTitle.textContent = "Branding and Design Agency"
})
// DOUBLE CLICK EVENT
changeTitleBtn.addEventListener("dblclick", function() {
    changeTitle.textContent = "Strategic Creativity"
})

// ...Button "Show Emojis"... 
const showEmojisBtn = document.getElementById("displ-emojis-toggle-btn");
const emojis = document.getElementById("emojis-toggle-content");
// CLICK EVENT
showEmojisBtn.addEventListener("click", function() {
    emojis.style.visibility = "visible"
})
// DOUBLE CLICK EVENT
showEmojisBtn.addEventListener("dblclick", function() {
    emojis.style.visibility = "hidden"
})


// ...Button "Add Text"... 
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
if (changeTextColorBtn && changeTitle) {
     /* if (element) safety check. */
     /* 1. Create a variable to keep track of the current state */
     let isColorChanged = false;
    changeTextColorBtn.addEventListener('click', () => {
        
        if (!isColorChanged) {
            /* Apply the new styles (Note: removed semicolons inside the quotes!) */
            /* use CSS variables already defined in :root */
            changeTitle.style.color = "var(--clr-accent)";
            changeTitle.style.textShadow = "1px 1px 2px var(--clr-dark-shadow)";

            /* Update the state */
            isColorChanged = true;
        } else {
            /* Revert back to the original styles */
            changeTitle.style.color = "var(--clr-text-main)";
            changeTitle.style.textShadow = "1px 1px 2px var(--clr-accent-shadow)";

            /* Update the state */
            isColorChanged = false;
        }
    });
}



// ...Button "Secret"... 
const secretMessageBtn = document.getElementById("secretmessage-toggle-btn");
const secretMessage = document.getElementById("secret-message-toggle-content");
// CLICK EVENT
secretMessageBtn.addEventListener("click", function() {
    secretMessage.style.visibility = "visible"
})
// DOUBLE CLICK EVENT
secretMessageBtn.addEventListener("dblclick", function() {
    secretMessage.style.visibility = "hidden"
})




// MOUSEOVER EVENT


/* =======================================
    7. CONTACT SECTION
   ======================================= */
// CONTACT FORM BUTTON
const submitMessageBtn = document.getElementById("submit-message");
const submitParagraph = document.getElementById("form-submit-message");
const contactForm = document.getElementById("contact-form");
// CLICK EVENT
submitMessageBtn.addEventListener("click", function() {
    submitParagraph.style.display = "block"
    contactForm.style.display = "none"
})
 