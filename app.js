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
const heroText = document.querySelector(".hero-text"); // to append the emojis after the hero text
// CLICK EVENT
// require both button and target container to exist
if (showEmojisBtn && heroText) { // if (element) safety check.
    let emojis = null; // variable to keep track of the emojis element
    showEmojisBtn.addEventListener('click', () => {
        // extra runtime guard in case heroText is not present for some reason
        if (!heroText) return;
        if (emojis === null) {
            emojis = document.createElement("p");
            emojis.classList.add("emojis-toggle-content");
            emojis.textContent = "🚀⭐💫🦄✨🚀🪂🌈🔥";
            heroText.appendChild(emojis);
        } else {
            emojis.remove();
            emojis = null;
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
    let unvisText = null;
    addTextBtn.addEventListener('click', () => {
        if (!addTextContent) 
            return; // extra runtime guard in case addTextContent is not present for some reason
        if (unvisText === null) {
           unvisText = document.createElement("h1");
        unvisText.textContent = "All buttons on this page are Toggle Buttons. \nYou can click the every button a second time.";
           addTextContent.appendChild(unvisText);

        } else {
            unvisText.remove();
            unvisText = null;
        }
    });
}

// ...Button "Secret"... 
// shows invisible Secret message under toggle buttons in the Hero section
const secretMessageBtn = document.getElementById("secretmessage-toggle-btn");
const secretMessage = document.getElementById("secret-message-toggle-content");
// CLICK EVENT
if (secretMessageBtn && secretMessage) {
    /* 1. Create a variable to keep track of the current state */
    let secretText = null;
    secretMessageBtn.addEventListener('click', () => {
        if (!secretMessage) 
            return; // extra runtime guard in case addTextContent is not present for some reason
        if (secretText === null) {
           secretText = document.createElement("h3");
            secretText.textContent = "🎊 THANK YOU FOR YOUR VISIT! 🎉";
            secretText.style.border = "1px solid var(--clr-text-main)";
            secretText.style.backgroundColor = "var(--clr-bg-nav)"; /* navigation background color "white" */
            secretText.style.padding = "16px";
            secretText.style.borderRadius = "8px";

            secretMessage.appendChild(secretText);

        } else {
            secretText.remove();
            secretText = null;
        }
    });
}

// HOME Page Toggle BUTTONS end


/* =======================================
    7. ABOUT US SECTION
   ======================================= */

// MOUSEOVER EVENT




/* =======================================
    7. CONTACT SECTION
   ======================================= */
// CONTACT FORM SUBMIT

/* Listening for a Form Submit
...................................*/
// Get the form element
const contactForm = document.getElementById("contact-form");
const submitMessage = document.getElementById("form-submit-message");

// Safety Check!
if (contactForm && submitMessage) { // if (element) safety check.
    contactForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Stop standard page reload on form submission
    
    // get the form data elements
    let usernameInput = document.getElementById("name");
    let useremailInput = document.getElementById("email");
    let usermessageInput = document.getElementById("message");

    // Guard against missing inputs (protects against DOM differences)
    if (!usernameInput || !useremailInput || !usermessageInput) {
        console.error('Contact form inputs are missing from the page.');
        alert('Form inputs are not available. Please reload the page.');
        return;
    }
    // Extract the actual values
    const formData = {
        name: usernameInput.value,
        email: useremailInput.value,
        message: usermessageInput.value
    };


    // Send the data to the server using Fetch API
    try {
            const siteName = "test"; // You can change this to a dynamic value if needed
            // Send the data to your Node.js backend
            const response = await fetch(`http://localhost:3000/send-email/${siteName}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });


    // perform operation with form input values and server response
    if (response.ok) {
        // If the server successfully sends the email, update the DOM
        const originalMessage = submitMessage.textContent;
        submitMessage.textContent = "🎊 Thank you for connecting with us! 🎉";
        
        // Clear the form inputs
        contactForm.reset();
        console.log("Email sent to server successfully!");

        // Revert the message after 20 seconds
        setTimeout(() => {
            submitMessage.textContent = originalMessage;
        }, 10000);

    } else {
        console.error("Server responded with an error.");
        alert("Something went wrong. Please try again later.");
    }
    } catch (error) {
        console.error("Error connecting to server:", error);
        alert("Could not connect to the server. Make sure it is running!");
    }
});
}
