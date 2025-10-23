// login form
//target form id and event lister to Login the form
document.getElementById("login").addEventListener("submit", (ev) => {
  // stuck on moment while entering worng information
  ev.preventDefault();

  // pulling login input fields

  const logdata = {
    logmail: document.getElementById("lmail").value,
    logpass: document.getElementById("lpass").value,
  };

  // get data form local storage
  const needdata = JSON.parse(localStorage.getItem("userdata")) || [];
  // verify userdata & password

  // Verify user correct mail
  let validuser = needdata.find((e) => e.usermail === logdata.logmail);

  if (!validuser && !needdata.find((e) => e.password === logdata.logpass)) {
    alert("You haven't signed up yet. Please sign up first.");
    window.location.href = "index.html"; // Redirect to sign up page
  } else if (!validuser) {
    alert("Incorrect email. Please try again.");
  } else if (validuser.password !== logdata.logpass) {
    alert("Incorrect password. Please try again.");
  } else {
    alert("Login successful!");
    document.getElementById("login").reset();
    location.reload();
  }
});
