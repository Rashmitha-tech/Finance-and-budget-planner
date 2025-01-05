let totalIncome = 0;
let totalExpenses = 0;
const expenseList = [];

const incomeInput = document.getElementById('income');
const expenseDescriptionInput = document.getElementById('expenseDescription');
const expenseAmountInput = document.getElementById('expenseAmount');
const addExpenseButton = document.getElementById('addExpense');

const totalIncomeDisplay = document.getElementById('totalIncome');
const totalExpensesDisplay = document.getElementById('totalExpenses');
const remainingBudgetDisplay = document.getElementById('remainingBudget');
const expenseListDisplay = document.getElementById('expenseList');

// Function to update the displayed values
function updateDisplay() {
    totalIncomeDisplay.textContent = totalIncome;
    totalExpensesDisplay.textContent = totalExpenses;
    remainingBudgetDisplay.textContent = totalIncome - totalExpenses;
    renderExpenseList();
}

// Function to render the list of expenses
function renderExpenseList() {
    expenseListDisplay.innerHTML = '';
    expenseList.forEach((expense, index) => {
        const li = document.createElement('li');
        li.textContent = expense.description + ": " + expense.amount; // Using string concatenation
        expenseListDisplay.appendChild(li);
    });
}

// Function to handle adding an expense
function addExpense() {
    const description = expenseDescriptionInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);

    if (description && !isNaN(amount) && amount > 0) {
        expenseList.push({ description, amount });
        totalExpenses += amount;
        updateDisplay();
    } else {
        alert("Please enter a valid description and amount.");
    }

    expenseDescriptionInput.value = '';
    expenseAmountInput.value = '';
}

// Event listener to add expense
addExpenseButton.addEventListener('click', addExpense);

// Update income on value change
incomeInput.addEventListener('input', function() {
    totalIncome = parseFloat(incomeInput.value);  
    updateDisplay();
});