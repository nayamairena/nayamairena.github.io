//This code is to display the form submissions to the console like we did in hw 4.
//Eventually I want to be able to make it a functional form to recieve emails from submissions.

let form = document.getElementById("contact");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const firstname = document.getElementById("fname").value;
  const lastname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("comment").value;

  if (!firstname && !lastname && !email && !message)
    console.warn("You must enter some data to submit this form.");
  else {
    if (!firstname && lastname)
      console.log("First name: no submission", "\nLast name: ", lastname);
    else if (!lastname && firstname)
      console.log("First name: ", firstname, "\nLast name: no submission");
    else if (firstname && lastname)
      console.log("Full name: ", firstname, lastname);
    else console.warn("No name was entered.");
    if (!email) console.log("Email: no submission");
    else console.log("Email: ", email);
    if (message) console.log("Comments: ", message);
  }
}
