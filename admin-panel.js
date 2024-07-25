// Ein Array zum speichern der Benutzerdaten
let users = [];

// Funktion zum laden der Benutzerdaten
function loadUsers() {
  fetch('get-users.php')
    .then(response => response.json())
    .then(data => {
      users = data;
      renderUsers();
    });
}

// Funktion zum rendern der Benutzerliste
function renderUsers() {
  const userList = document.getElementById('user-list');
  userList.innerHTML = '';
  users.forEach(user => {
    const userListItem = document.createElement('li');
    userListItem.textContent = `${user.name} (${user.email})`;
    userListItem.addEventListener('click', () => {
      editUser(user.id);
    });
    userList.appendChild(userListItem);
  });
}

// Funktion zum bearbeiten eines Benutzers
function editUser(id) {
  const user = users.find(u => u.id === id);
  if (!user) return;
  const form = document.getElementById('edit-user-form');
  form.name.value = user.name;
  form.email.value = user.email;
  form.id.value = id;
}

// Funktion zum speichern der Änderungen
function saveChanges() {
  const form = document.getElementById('edit-user-form');
  const userId = form.id.value;
  const name = form.name.value;
  const email = form.email.value;
  fetch(`update-user.php?userId=${userId}&name=${name}&email=${email}`)
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        loadUsers();
      } else {
        alert('Error updating user');
      }
    });
}

// Funktion zum hinzufügen eines neuen Benutzers
function addUser() {
  const form = document.getElementById('add-user-form');
  const name = form.name.value;
  const email = form.email.value;
  fetch('add-user.php?name=' + name + '&email=' + email)
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        loadUsers();
      } else {
        alert('Error adding user');
      }
    });
}

// Initialisierung
loadUsers();