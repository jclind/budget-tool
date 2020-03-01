let initialBalance = 0;
let expensesAmount = 0;
let currentBalance = 0;
const expensesList = [];    

console.log("hello")

function add() {
    let inputIncomeTitle = document.getElementById('input-income-title').value;
    let inputIncomeAmount = document.getElementById('input-income-amount').value;
    // check for invalid input entries
    if (inputIncomeTitle == '' || inputIncomeAmount == '') {
        alert('Please fill in all feilds');
        return false;
    }
    if (isNaN(inputIncomeAmount) || inputIncomeAmount < 0 || inputIncomeAmount > 1000000000) {
        alert('Please enter a correct amount of money')
        return false;
    }

    // add input value to total and current balances
    initialBalance += Number(inputIncomeAmount);
    document.getElementById('initial-balance').innerHTML = `$${initialBalance}`;
    currentBalance += Number(inputIncomeAmount);
    document.getElementById('current-balance').innerHTML = `$${currentBalance}`;

    // add title and value to array and display it using createList();
    let temp = {'title': inputIncomeTitle, 'value': inputIncomeAmount};
    expensesList.push(temp);
    document.getElementById('table-body').innerHTML = '';
    createList();
    
}
function subtract() {
    let inputExpensesTitle = document.getElementById('input-expenses-title').value;
    let inputExpensesAmount = document.getElementById('input-expenses-amount').value;
        
    // check for invalid input entries
    if (inputExpensesTitle == '' || inputExpensesAmount == '') {
        alert('Please fill in all feilds');
        return false;
    }
    if (isNaN(inputExpensesAmount) || inputExpensesAmount < 0 || inputExpensesAmount > 1000000000) {
        alert('Please enter a correct amount of money')
        return false;
    }

    expensesAmount += Number(inputExpensesAmount);
    document.getElementById('expenses').innerHTML = `$${expensesAmount}`;
    currentBalance -= Number(inputExpensesAmount);
    document.getElementById('current-balance').innerHTML = `$${currentBalance}`

    let temp = {'title': inputExpensesTitle, 'value': inputExpensesAmount, 'expense': true};
    expensesList.push(temp);
    document.getElementById('table-body').innerHTML = '';
    createList();
}

function createList() {
    if (expensesList)
    for (const expenses of expensesList) {
        let index = 0;
        if (!expenses.expense) {
            document.getElementById('table-body').innerHTML += `<tr>
            <td style="color: rgb(4, 155, 4)">${expenses.title}</td>
            <td style="color: rgb(4, 155, 4)">+${expenses.value}</td>
            <td>
                <button class="edit-item"><i class="fa fa-edit"></i></button>
            </td>
            <td>
                <button class="delete-item" onclick="removeItem(${index})"><i class="fa fa-trash"></i></button>
            </td>
            </tr>`; 
        } else {
            document.getElementById('table-body').innerHTML += `<tr>
            <td style="color: rgb(150, 14, 14)">${expenses.title}</td>
            <td style="color: rgb(150, 14, 14)">-${expenses.value}</td>
            <td>
                <button class="edit-item"><i class="fa fa-edit"></i></button>
            </td>
            <td>
                <button class="delete-item" onclick="removeItem(${index})"><i class="fa fa-trash"></i></button>
            </td>
            </tr>`;
        }

        index++;
              
    }
}

function removeItem(index) {
    expensesList.splice(index, 1);
    document.getElementById('table-body').innerHTML = '';
    createList();
}



createList();

document.getElementById('income-button').addEventListener('click', add);
document.getElementById('expenses-button').addEventListener('click', subtract);



