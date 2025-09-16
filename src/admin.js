function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

const searchInput = document.querySelector('.search-input');
const roleFilter = document.querySelectorAll('.filter-select')[0];
const statusFilter = document.querySelectorAll('.filter-select')[1];

function filterUsers() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedRole = roleFilter.value.toLowerCase();
    const selectedStatus = statusFilter.value.toLowerCase();

    const rows = document.querySelectorAll('.users-table tbody tr');

    rows.forEach(row => {
        const username = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        const email = row.querySelector('td:nth-child(3)').textContent.toLowerCase();
        const role = row.querySelector('.role-badge').textContent.toLowerCase();
        const status = row.querySelector('.status-badge').textContent.toLowerCase();

        const matchesSearch = username.includes(searchTerm) || email.includes(searchTerm);
        const matchesRole = !selectedRole || role.includes(selectedRole);
        const matchesStatus = !selectedStatus || status.includes(selectedStatus);

        if (matchesSearch && matchesRole && matchesStatus) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

searchInput.addEventListener('input', filterUsers);
roleFilter.addEventListener('change', filterUsers);
statusFilter.addEventListener('change', filterUsers);

document.querySelector('#create-user-modal form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Користувача успішно створено!');
    closeModal('create-user-modal');
});

document.querySelector('#remove-user-modal form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Користувача успішно видалено!');
    closeModal('remove-user-modal');
});

document.querySelector('#edit-user-modal form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Зміни успішно збережено!');
    closeModal('edit-user-modal');
});