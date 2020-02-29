const expensesList = [{}];

// Assign variables for html classes
// let initialBalance = document.getElementById('initial-balance');
// let expenses = document.getElementById('expenses');
// let currentBalance = document.getElementById('current-balance');
// let inputExpensesTitle = document.getElementById('input-expenses-title').value;
// let inputExpensesAmount = document.getElementById('input-expenses-amount').value;
// let expensesButton = document.getElementById('expenses-button');
console.log('bruh')
var el = document.getElementById('income-button');
if(el){
  el.addEventListener('click', add, false);
}

console.log("hello")
createList();

function add() {
    let inputIncomeTitle = document.getElementById('input-income-title').value;
    let inputIncomeAmount = document.getElementById('input-income-amount').value;
    console.log("hello")
    temp = {'title': inputIncomeTitle, 'value': inputIncomeAmount};
    expenseList.push(temp);
    createList();
}

function createList() {
    for (const e of expensesList) {
        var el = document.getElementById('table-body');
        if (el) {
            el.innerHTML += `<tr>
                <td>${e.title}</td>
                <td>${e.value}</td>
                <td>
                    <button class="edit-item"><i class="fa fa-edit"></i></button>
                </td>
                <td>
                    <button class="delete-item"><i class="fa fa-trash"></i></button>
                </td>
                </tr>`
        }
        
    }
}

