const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');
const homeLink = document.querySelector('.navigation a[href="#"]'); // Select Home link
const textureSection = document.querySelector('.texture-section'); // Select the texture section
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
// Login Popup Button Click
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup'); // Show the popup
    textureSection.style.display = 'none'; // Hide the texture section
    console.log('Login button clicked: Texture section hidden'); // Debug log
});

// Close Icon Click
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup'); // Hide the popup
    textureSection.style.display = ''; // Restore the texture section
    console.log('Popup closed: Texture section restored'); // Debug log
});

// Home Link Click
homeLink.addEventListener('click', () => {
    wrapper.classList.remove('active-popup'); // Hide the popup
    textureSection.style.display = ''; // Restore the texture section
    console.log('Home clicked: Texture section restored'); // Debug log
});

registerLink.addEventListener('click',() => {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click',() => {
    wrapper.classList.remove('active');
});
document.querySelector('.form-box.login form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Get email and password values from the input fields
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;

    // Hardcoded email and password for testing
    const validUsers = {

        "1234" : [
          "Youssef@pi.m"
        ],
        // "123" : ["Ouahab@fso.m"],
        "12345" : ["Ouahab@fso.m"],
        
        

   
        "123" : ["Fatima-zahra.berhili@ump.ac.ma"]
        

    };

    // Check if the credentials match
    if (Object.keys(validUsers).includes(password) && validUsers[password].includes(email)) {
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('email', email); // Save the email for personalization
        window.location.href = "Logout/index.html";

    } else {
        // Show an alert if credentials are invalid
        alert("Invalid email or password. Please try again!");
    }
});


// Select the registration form
const registerForm = document.querySelector('.form-box.register form');

// Handle form submission
registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting
    alert('No new users for the moment!'); // Show the alert
    console.log('Registration blocked: No new users allowed.');
});
