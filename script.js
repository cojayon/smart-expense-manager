let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");

const addButton = document.getElementById("add-button");
const expensesContainer = document.getElementById("expenses-container");
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("search-button");

const totalExpenses = document.getElementById("total-expenses");
const expenseCount = document.getElementById("expense-count");
const averageExpense = document.getElementById("average-expense");
const categoryStatistics = document.getElementById("category-statistics");
const categoryChart = document.getElementById("category-chart");

let chartInstance = null;

function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function showExpenses(expensesToShow = expenses) {
    expensesContainer.innerHTML = "";

    let total = 0;
    let categories = {};

    for (const expense of expensesToShow) {
        total += Number(expense.amount);

        if (!categories[expense.category]) {
            categories[expense.category] = 0;
        }

        categories[expense.category] += Number(expense.amount);

        const item = document.createElement("div");
        item.className = "expense-item";

        item.innerHTML = `
            <strong>${expense.name}</strong>
            <p>Amount: ${expense.amount}</p>
            <p>Category: ${expense.category}</p>
            <p>Date: ${expense.date}</p>
            <button class="delete-button">Delete</button>
        `;

        const deleteButton = item.querySelector(".delete-button");

        deleteButton.addEventListener("click", function () {
            const index = expenses.indexOf(expense);

            if (index !== -1) {
                expenses.splice(index, 1);
                saveExpenses();
                showExpenses();
            }
        });

        expensesContainer.appendChild(item);
    }

    const count = expensesToShow.length;
    const average = count > 0 ? total / count : 0;

    totalExpenses.textContent = total;
    expenseCount.textContent = count;
    averageExpense.textContent = average;

    categoryStatistics.innerHTML = "";

    for (const category in categories) {
        categoryStatistics.innerHTML += `
            <p>${category}: ${categories[category]}</p>
        `;
    }

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(categoryChart, {
        type: "pie",
        data: {
            labels: Object.keys(categories),
            datasets: [
                {
                    data: Object.values(categories)
                }
            ]
        }
    });
}

addButton.addEventListener("click", function () {
    const name = nameInput.value.trim();
    const amount = Number(amountInput.value);
    const category = categoryInput.value.trim();
    const date = dateInput.value;

    if (!name || amount <= 0 || !category || !date) {
        alert("Please fill in all fields correctly.");
        return;
    }

    const expense = {
        name: name,
        amount: amount,
        category: category,
        date: date
    };

    expenses.push(expense);
    saveExpenses();

    nameInput.value = "";
    amountInput.value = "";
    categoryInput.value = "";
    dateInput.value = "";

    showExpenses();
});

searchButton.addEventListener("click", function () {
    const searchText = searchInput.value.trim().toLowerCase();

    const filteredExpenses = expenses.filter(function (expense) {
        return expense.name.toLowerCase().includes(searchText);
    });

    showExpenses(filteredExpenses);
});

showExpenses();

showExpenses();
