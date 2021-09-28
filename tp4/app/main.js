const form = document.querySelector('#form');
const submitButton = document.querySelector('#submit');
const tbody = document.querySelector('#tbody');

submitButton.addEventListener('click', () => {
  if (form.elements['name'].value && form.elements['password'].value) {
    addUser({
      name: form.elements['name'].value,
      password: form.elements['password'].value,
    });
  }
});

const addUser = async (args) => {
  try {
    const { name, password } = args;
    const req = await fetch('http://localhost:3000/user', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        name,
        password,
      }),
    });
    await loadUsers();
  } catch (error) {
    console.log(error);
  }
};

const loadUsers = async () => {
  try {
    const res = await fetch('http://localhost:3000/user', {
      method: 'GET',
    });
    const users = await res.json();

    tbody.innerHTML = '';

    users.forEach((user) => {
      tbody.innerHTML += `
        <tr>
          <td>${user._id}</td>
          <td>${user.name}</td>
          <td>${user.password}</td>
        </tr>
      `;
    });
  } catch (error) {
    console.log(error);
  }
};

loadUsers();
