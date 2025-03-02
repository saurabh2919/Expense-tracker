let descriptionInp = document.querySelector("#description");
let amountInp = document.querySelector("#amount");
let dateInp = document.querySelector("#date");
let addExpBtn = document.querySelector("#addExpenseBtn");
let resetBtn = document.querySelector("#resetBtn");
let removeBtn = document.querySelector("#removeBtn");
let tr;
let sum = 0;

addExpense = () =>{
    if(descriptionInp.value === "" || amountInp.value === "" || dateInp.value === ""){
        alert("Required Fiedls are Empty!");
        return;
    }
    tr = document.createElement("tr")
    tr.innerHTML = `<td>${descriptionInp.value}</td> 
                    <td>${amountInp.value} Rs</td> 
                    <td>${dateInp.value}</td>`
    document.querySelector("table").appendChild(tr);
    sum = sum + +amountInp.value;
    document.querySelector(".totalExp").textContent = sum;
    descriptionInp.value = '';
    amountInp.value = '';
    dateInp.value = '';
    
}

addExpBtn.addEventListener("click", function(){
   addExpense();
})

removeBtn.addEventListener("click", function(){
    document.querySelector("table").removeChild(tr);
})

resetBtn.addEventListener("click", function(e){
    let rows = document.querySelectorAll("tr");
    for(let i = 1; i < rows.length; i++)
        rows[i].remove();
    document.querySelector(".totalExp").textContent = 0;
    sum = 0;
})