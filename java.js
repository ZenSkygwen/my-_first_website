function validation(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let age = document.getElementById("age").value;
  let male = document.getElementById("male").checked;
  let female = document.getElementById("female").checked;
  let agree = document.getElementById("agree").checked;

  if (name === "" || email === "" || password === "" || age === "") {
    alert("Please fill all the form");
  } else if (/\d/.test(name)) {
    alert("Name cannot include numbers");
  } else if (!email.includes("@") || !email.includes(".com")) {
    alert("Email must contain @ and .com");
  } else if (age < 1) {
    alert("Age cannot be less than 1");
  } else if (password.length <= 5) {
    alert("Password must be more than 5 characters");
  } else if (!male && !female) {
    alert("Please select your gender");
  } else if (!agree) {
    alert("Please agree to the terms and conditions before continuing.");
  } else {
    let valid = confirm("Are you sure you want to subscribe with this information?");
    if (valid) {
      alert("Thanks for subscribing and welcome to ShiDecKK's Family, " + name + "!");
      window.location.href = "Main Home.html";
    }
  }
}


