const savedData = JSON.parse(window.localStorage.getItem('expenseData'));
const labels = savedData.expenses.map(expense => expense.title);
const dataValues = savedData.expenses.map(expense => expense.amount);
// Hardcoded economy rate impact (simulated values)
const economyRateImpact = [Math.random()+.5, Math.random()+.5, Math.random()+.5, Math.random()+.5, Math.random()+.5, Math.random()+.5]; // Hypothetical yearly growth rate

// Create a dynamic dataset for each expense with different colors
const datasets = savedData.expenses.map((expense, index) => {
    // Simulate economy rate impact on the expense data for each expense
    const simulatedData = Array(6).fill(0).map((_, i) => expense.amount * economyRateImpact[i]);

    return {
        label: expense.title,
        data: simulatedData,
        borderColor: `hsl(${index * 60}, 70%, 50%)`, // Different colors
        borderWidth: 2,
        fill: false,
        tension: 0.1
    };
});

// Graph context
const ctx = document.getElementById('expenseChart').getContext('2d');

// Create the line chart
const expenseChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024'], // Last 5 years + current year
        datasets: datasets
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Expense Amount ($)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Year'
                }
            }
        }
    }
});

// Function to Save the Chart as PDF
document.getElementById('savePdfBtn').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('landscape'); // Create a PDF instance

    // Add a title to the PDF
    pdf.setFontSize(18);
    pdf.text('Expense Visualization Report', 10, 10);

    // Convert the chart to an image and add it to the PDF
    pdf.addImage(expenseChart.toBase64Image(), 'JPEG', 10, 20, 280, 150);

    // Save the PDF file
    pdf.save('expense_report.pdf');
});