function showAdminPanel() {
  document.getElementById("adminPanel").style.display = "block";
}

function closeAdminPanel() {
  document.getElementById("adminPanel").style.display = "none";
}

function editProfile() {
  alert("Use the Admin Panel to edit profile details!");
}

function updateProfile() {
  const name = document.getElementById("nameInput").value;
  const about = document.getElementById("aboutInput").value;
  const email = document.getElementById("emailInput").value;

  if (name) document.getElementById("name").innerText = name;
  if (about) document.getElementById("about").innerText = about;
  if (email) document.getElementById("email").innerText = email;

  alert("Profile updated successfully!");
  closeAdminPanel();
}
