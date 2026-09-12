let expenses = JSON.parse(localStorage.getltem("expenses")) || [];
const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");
const addButton = document.getElementById("add-button");
const totalExpenses = document.getElementById("total-expenses");
const expensesContainer = document.getElementById("expenses-container");
const serachInput = document.getElementById("search");
const searchButton = document.getElementById("search-button");
const expenseCount = document.getElementById("expense-count");
const averageExpense = document.getElementById("aversge-expense");
const categoryStatistics = document.getElementById("category-statistics");
const category = document.getElementById("category-chart")

function showExpenses(expensesToShow = expenses) {
    expensesContainer.innerHTML = "";
    let total = 0;
    let count = expensesToShow.length;

    let average = 0;
    let categories = {};
    for (const expense of expensesToShow) {
        if (!categories[expense.category]) {
            categories[expense.category] = 0;
        }
        categories[expense.category] += expense.amount;
    }

    if (count > 0) {
        average = total / count;
    }


    for (const expense of expensesToShow) {
        total += expense.amount;
        const item = document.createElement("div");
        item.className = "expense-item";
        item.innerHTML = `
        <strong>${expense.name}</strong>
        <p>Amount: ${expense.amount}</p>
        <p>Category: ${expense.category}</p>
        <p>Date: ${expense.date}</p>
        button>Delete</>button>
        `;

        const deleteButton = item.querySelector("button");
        deleteButton.addEventListe("click", function () {
            expenses.splice(expenses.indexOf(expense), 1);
            localStorage.setItem("expenses", JSON.stringify(expenses));
            showExpenses();
        });
        expensesContainer.appendChild(item);
    }

    totalExpenses.textContent = total;
    expenseCount.textContent = count;
    averageExpense.textContent = average;
    categoryStatistics.innerHTML = "";
    for (const category in categories) {
        categoryStatistics.innerHTML += `
        <p>${category}: ${categories[category]}<p>
        `;
    }
    new chart(category, {
        type: "pie",
        data: {
            labels: Object.keys(categories),
            datastes: [
                {
                    data: Object.values(categories)
                }
            ]
        }
    });
}
addButton.addEventListener("click", function () {
    const name = nameInput.value;
    const amount = Number(amountInput.value);
    const category = categoryInput.value;
    const date = dateInput.value;

    if (!name || !amount || !category || !date) {
        alert("Please fill in all fields.");
        return;
    }
    const expense = { name: name, amount: amount, category: category, date: date };
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    nameInput.value = "";
    amountInput.value = "";
    categoryInput.value = "";
    dateInput.value = "";
    showExpenses();
});
searchButton.addEventListe("click", function () {
    const searchText = serachInput.value.toLowerCase();

    const filteredExpenses = expenses.filter(function (expense) {
        return expense.name.toLowerCase().includes(searchText);
    });
    showExpenses(filteredExpenses);
});

