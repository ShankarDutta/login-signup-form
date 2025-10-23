//target form id and event lister to submit the form
document.getElementById("Signup-form").addEventListener("submit", (e) => {
  // stuck on moment while entering worng information
  e.preventDefault();

  //pulling data from input fields and convert in object
  const signData = {
    username: document.getElementById("name").value,
    usermail: document.getElementById("mail").value,
    password: document.getElementById("pass").value,
  };

  //   password only 6 digits
  if (signData.password.length < 6) {
    alert("please give password above 6 digits");
    return;
  }

  if (
    signData.username !== "" &&
    signData.usermail !== "" &&
    signData.password !== ""
  ) {
    // pulling previous data form localStorage
    const prevdata = JSON.parse(localStorage.userdata || "[]");
    // merging data
    const allData = [...prevdata, signData];
    //   set data in localStorage
    localStorage.setItem("userdata", JSON.stringify(allData));

    // if form submit succesfull then give alert
    alert("Form Submit Sucessfully");
  }

  document.getElementById("Signup-form").reset(); // remove input values
  location.reload(); // page reload
  window.location.href = "login.html"; // Redirect to dashboard
});
