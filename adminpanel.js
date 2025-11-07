// Initial Data
let skills = [
  { name: "Java", level: "Advanced" },
  { name: "HTML, CSS, JS", level: "Intermediate" },
  { name: "React", level: "Beginner" },
  { name: "MySQL", level: "Intermediate" }
];

function renderSkills() {
  const table = document.getElementById("skillsTable");
  table.innerHTML = "";
  skills.forEach((s, i) => {
    table.innerHTML += `
      <tr>
        <td>${s.name}</td>
        <td>${s.level}</td>
        <td><button class="btn btn-sm btn-outline-danger" onclick="deleteSkill(${i})">Delete</button></td>
      </tr>`;
  });
}

function showAddSkill() {
  document.getElementById("addSkillForm").style.display = "block";
}

function addSkill() {
  const name = document.getElementById("skillName").value.trim();
  const level = document.getElementById("skillLevel").value.trim();
  if (!name || !level) return alert("Please fill all fields!");
  skills.push({ name, level });
  renderSkills();
  document.getElementById("addSkillForm").style.display = "none";
  document.getElementById("skillName").value = "";
  document.getElementById("skillLevel").value = "";
}

function deleteSkill(i) {
  skills.splice(i, 1);
  renderSkills();
}

function togglePanel(panel) {
  document.getElementById("profilePanel").style.display = (panel === 'profile') ? 'block' : 'none';
  document.getElementById("skillsPanel").style.display = (panel === 'skills') ? 'block' : 'none';
  document.getElementById("educationPanel").style.display = (panel === 'education') ? 'block' : 'none';
  document.getElementById("projectsPanel").style.display = (panel === 'projects') ? 'block' : 'none';
}

renderSkills();
