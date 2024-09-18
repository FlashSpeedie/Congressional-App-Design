let rowCount = 1;

// Add a new expense row dynamically
document.getElementById('addRow').addEventListener('click', () => {
    rowCount++;
    const newRow = document.createElement('div');
    newRow.classList.add('table-row');
    newRow.innerHTML = `
        <input type="text" placeholder="Expense Title" class="input-box expense-title">
        <div class="input-box" style="position: relative;">
            <input type="number" placeholder="%" class="input-box expense-percentage">
            <span class="percent-sign">%</span>
        </div>
        <div class="input-box">
            <span class="dollar-sign">$</span>
            <input type="number" placeholder="Amount" class="input-box expense-amount">
        </div>
        <i class="delete-btn" onclick="confirmDelete(this)">🗑️</i>
    `;
    document.getElementById('expenseTable').appendChild(newRow);
});

// Confirm delete functionality
function confirmDelete(deleteIcon) {
    if (confirm('Are you sure you want to delete this row?')) {
        const row = deleteIcon.closest('.table-row');
        row.remove();
    }
}

// Submit and Save Data as JSON
document.getElementById('submitBtn').addEventListener('click', () => {
    const rows = document.querySelectorAll('.table-row');
    const expenses = [];

    rows.forEach((row) => {
        const title = row.querySelector('.expense-title').value;
        const percentage = row.querySelector('.expense-percentage').value;
        const amount = row.querySelector('.expense-amount').value;

        if (title && percentage && amount) {
            expenses.push({
                title: title,
                percentage: percentage,
                amount: amount
            });
        }
    });

    const data = {
        salary: document.getElementById('annualSalary').value,
        expenses: expenses
    };

    console.log('Saved Data:', JSON.stringify(data));
    window.localStorage.setItem('expenseData', JSON.stringify(data));
    alert('Data saved successfully!');
});

// Format numbers with commas
document.getElementById('annualSalary').addEventListener('input', function () {
    this.value = formatNumberWithCommas(this.value.replace(/,/g, ''));
});

function formatNumberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}