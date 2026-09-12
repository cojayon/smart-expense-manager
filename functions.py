from storage import save_expenses


def show_expenses(expenses):
    for expense in expenses:
        print("Name:", expense["name"])
        print("Amount:", expense["amount"])
        print("Category:", expense["category"])
        print("Date:", expense["date"])
        print("--------------------")


def add_expense(expenses):
    name = input("Enter expense name: ")
    amount = int(input("Enter amount: "))
    category = input("Enter category: ")
    date = input("Enter date: ")

    expense = {
        "name": name,
        "amount": amount,
        "category": category,
        "date": date
    }

    expenses.append(expense)
    save_expenses(expenses)
    print("Expense added successfully.")


def delete_expense(expenses):
    name = input("Enter expense name to delete: ")

    for expense in expenses:
        if expense["name"].lower() == name.lower():
            expenses.remove(expense)
            save_expenses(expenses)
            print("Expense deleted successfully.")
            return

    print("Expense not found.")


def edit_expense(expenses):
    name = input("Enter expense name to edit: ")

    for expense in expenses:
        if expense["name"].lower() == name.lower():
            expense["name"] = input("Enter new name: ")
            expense["amount"] = int(input("Enter new amount: "))
            expense["category"] = input("Enter new category: ")
            expense["date"] = input("Enter new date: ")

            save_expenses(expenses)
            print("Expense updated successfully.")
            return

    print("Expense not found.")


def search_expense(expenses):
    name = input("Enter expense name to search: ")

    for expense in expenses:
        if expense["name"].lower() == name.lower():from storage import save_expenses


def show_expenses(expenses):
    for expense in expenses:
        print("Name:", expense["name"])
        print("Amount:", expense["amount"])
        print("Category:", expense["category"])
        print("Date:", expense["date"])
        print("--------------------")


def add_expense(expenses):
    name = input("Enter expense name: ")
    amount = int(input("Enter amount: "))
    category = input("Enter category: ")
    date = input("Enter date: ")

    expense = {
        "name": name,
        "amount": amount,
        "category": category,
        "date": date
    }

    expenses.append(expense)
    save_expenses(expenses)
    print("Expense added successfully.")


def delete_expense(expenses):
    name = input("Enter expense name to delete: ")

    for expense in expenses:
        if expense["name"].lower() == name.lower():
            expenses.remove(expense)
            save_expenses(expenses)
            print("Expense deleted successfully.")
            return

    print("Expense not found.")


def edit_expense(expenses):
    name = input("Enter expense name to edit: ")

    for expense in expenses:
        if expense["name"].lower() == name.lower():
            expense["name"] = input("Enter new name: ")
            expense["amount"] = int(input("Enter new amount: "))
            expense["category"] = input("Enter new category: ")
            expense["date"] = input("Enter new date: ")

            save_expenses(expenses)
            print("Expense updated successfully.")
            return

    print("Expense not found.")


def search_expense(expenses):
    name = input("Enter expense name to search: ")

    for expense in expenses:
        if expense["name"].lower() == name.lower():
            print("Name:", expense["name"])
            print("Amount:", expense["amount"])
            print("Category:", expense["category"])
            print("Date:", expense["date"])
            return

    print("Expense not found.")


def calculate_total(expenses):
    total = 0

    for expense in expenses:from storage import save_expenses


def show_expenses(expenses):
    for expense in expenses:
        print("Name:", expense["name"])
        print("Amount:", expense["amount"])
        print("Category:", expense["category"])
        print("Date:", expense["date"])
        print("--------------------")


def add_expense(expenses):
    name = input("Enter expense name: ")
    amount = int(input("Enter amount: "))
    category = input("Enter category: ")
    date = input("Enter date: ")

    expense = {
        "name": name,
        "amount": amount,
        "category": category,
        "date": date
    }

    expenses.append(expense)
    save_expenses(expenses)
    print("Expense added successfully.")


def delete_expense(expenses):
    name = input("Enter expense name to delete: ")

    for expense in expenses:
        if expense["name"].lower() == name.lower():
            expenses.remove(expense)
            save_expenses(expenses)
            print("Expense deleted successfully.")
            return

    print("Expense not found.")


def edit_expense(expenses):
    name = input("Enter expense name to edit: ")

    for expense in expenses:
        if expense["name"].lower() == name.lower():
            expense["name"] = input("Enter new name: ")
            expense["amount"] = int(input("Enter new amount: "))
            expense["category"] = input("Enter new category: ")
            expense["date"] = input("Enter new date: ")

            save_expenses(expenses)
            print("Expense updated successfully.")
            return

    print("Expense not found.")


def search_expense(expenses):
    name = input("Enter expense name to search: ")

    for expense in expenses:
        if expense["name"].lower() == name.lower():
            print("Name:", expense["name"])
            print("Amount:", expense["amount"])
            print("Category:", expense["category"])
            print("Date:", expense["date"])
            return

    print("Expense not found.")


def calculate_total(expenses):
    total = 0

    for expense in expenses:
        total += expense["amount"]

    print("Total expenses:", total)
        total += expense["amount"]

    print("Total expenses:", total)
            print("Name:", expense["name"])
            print("Amount:", expense["amount"])
            print("Category:", expense["category"])
            print("Date:", expense["date"])
            return

    print("Expense not found.")


def calculate_total(expenses):
    total = 0

    for expense in expenses:
        total += expense["amount"]

    print("Total expenses:", total)
