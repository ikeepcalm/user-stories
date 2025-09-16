document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

document.querySelectorAll('.checkbox-group input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const filterId = checkbox.id.replace('filter-', '');
        const selects = document.querySelectorAll('.search-filters .filter-select');

        selects.forEach(select => {
            if (select.previousElementSibling.textContent.toLowerCase().includes(filterId)) {
                select.disabled = !checkbox.checked;
            }
        });
    });
});

document.getElementById('select-all')?.addEventListener('change', (e) => {
    document.querySelectorAll('input[name="report-select"]').forEach(checkbox => {
        checkbox.checked = e.target.checked;
    });
});

document.querySelectorAll('.btn-secondary').forEach(btn => {
    btn.addEventListener('click', () => {
        const tableContainer = btn.closest('.tab-content').querySelector('.reports-table-container');
        tableContainer.innerHTML = `
                <div class="loading-state">
                    <div class="spinner"></div>
                    <p>Завантаження даних...</p>
                </div>
            `;

        setTimeout(() => {
            location.reload();
        }, 2000);
    });
});