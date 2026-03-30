# Interactive Registration Form

The form will provide real-time feedback to the user and demonstrate how to handle user input effectively and persist simple data.



## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview
- Client-side functionality for user registration page
- Implement real-time input validation using JavaScript event listeners (input event).
- Use HTML5 validation attributes (e.g., required, type, minlength, pattern).
- Apply the JavaScript Constraint Validation API to check validity and display custom error messages.
- Dynamically create and display error messages next to input fields.
- Handle the form submit event, prevent default submission, and perform final validation.
- Use localStorage to save and retrieve simple form data (e.g., username).



## Reflections

- How did event.preventDefault() help in handling form submission?
--  submitting a form causes the page to reload and sends the data to a server. event.preventDefault() stops that from happening, giving the JavaScript a chance to validate all the fields first and decide what to do. 

- What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?
--  HTML5 attributes like required, minlength, and pattern are built into the browser and enforce basic rules automatically. JavaScript validation gives you full control — things like checking that two fields match, writing custom error messages, and deciding exactly when and where errors appear. 

- Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?

-- On a successful submission, localStorage.setItem("username", usernameInput.value) saves the username. When the page loads, localStorage.getItem("username") checks if a value is stored and pre-fills the field if one exists. 

- Describe a challenge you faced in implementing the real-time validation and how you solved it.
-- The confrm password field was challenging. If a user types a valid matching password, then goes back and changes the password field, the confirm field would still show as valid even though it no longer matched. This was solved by rerunning validateConfirm() inside the password field's input listener.

- How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?
--Each field has its own dedicated error span directly below it so the message appears exactly where the problem is.  Errors only show as the user types into a field, not all at once on page load, so the form doesn't feel overwhelming before they've done anything.

### Links

- Solution URL:(https://github.com/KwadwoDanso/personal-blog-sba.git)


## My process
- Getting all the elements using getElementById so they were ready to use. 
- showError and clearError function instead of repeating the same lines in every validator, these two functions handle turning the red border and message on and off.
- Wrote a validator for each field 
- Added real-time listeners 
- Handled the submit 
- Added localStorage

### Built with

-Javascript
-HTML/CSS



### What I learned

- The use of DOM, further manipulate it.
Real time validation
- Updating the DOM to reflect changes in user input.
- dynamically create and display error message next to input fields.
- Further using the localStorage


## Author
-Author is Kwadwo 

## Acknowledgments


- MDN Web Docs
- w3schools
- Per Scholas JS lessons
- https://eloquentjavascript.net/14_dom.html


