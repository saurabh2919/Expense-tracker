
let addExpBtn = document.querySelector("#addExpenseBtn");
let resetBtn = document.querySelector("#resetBtn");
let removeBtn = document.querySelector("#removeBtn");
let descriptionInp = document.querySelector("#description");
let amountInp = document.querySelector("#amount");
let dateInp = document.querySelector("#date");

let expences = []; // { description: ..., amount: ..., Date: ... }

function addExpense() {



    if(descriptionInp.value === "" || amountInp.value === "" || dateInp.value === ""){
        alert("Required Fiedls are Empty!");
        return;
    }

    let newExpence = {
        Description: descriptionInp.value,
        Amount: +amountInp.value,
        Date: dateInp.value
    }

    

    expences.push(newExpence);

    render();
}


function render() {
    let expence = expences[expences.length - 1];
    let { Description, Amount, Date } = expence;
    let html = 
    `
    <td>${Description}</td> 
    <td>${Amount} Rs</td> 
    <td>${Date}</td>
    `

    let row = document.createElement('tr');

    row.innerHTML = html;

    document.querySelector("table").appendChild(row);  

    renderTotal();
    
    descriptionInp.value = '';
    amountInp.value = '';
    dateInp.value = '';

    
}

addExpBtn.addEventListener("click", addExpense);

removeBtn.addEventListener("click", function(){
    let rows = document.querySelectorAll("tr");
    rows[rows.length - 1].remove();
    expences.pop();
    
    renderTotal();
})

resetBtn.addEventListener("click", function(e){
    let rows = document.querySelectorAll("tr");
    for(let i = 1; i < rows.length; i++)
        rows[i].remove();
    
    expences = [];
    renderTotal();
})

function renderTotal() {
    let total = 0;
    expences.forEach((expence) => {
        total += expence['Amount'];
    });

    document.querySelector(".totalExp").textContent = total;
}


