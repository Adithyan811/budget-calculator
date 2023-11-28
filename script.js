//log out
function logOut(){
  localStorage.clear()
  window.location='./index.html'
  }
  
  //clear
  function clearAll(){
      localStorage.removeItem('budgetData')

  }

let amt={
 spend:0,
  balance:0
}
// add income
function addIncome() {
  let type = document.getElementById('itype').value;
  let amount = Math.floor(parseFloat(document.getElementById('iamount').value));

  if (type === '' || isNaN(amount) || amount <= 0) {
      alert('Enter valid Data')
  } else {
    amt.balance += amount;
    updateLocalStorageAndUI();
    updateUI(type, amount, 'income');
  }
}

//add expence
function addExpense(){
      
  var expence_type= etype.value;
  var expence_amount=parseFloat(eamount.value);
  if(expence_type=="" || expence_amount==""){
      alert("Please Enter Description and Income")
  }
  else{
      balance=localStorage.getItem('balance');
      console.log(`balance before ${expence_amount}`);
      balance=parseFloat(expence_amount)
      localStorage.setItem('balance',balance)
      console.log(balance);
      
  }
}
function addExpense() {
  let etype = document.getElementById('etype').value;
  let eamount = Math.floor(parseFloat(document.getElementById('eamount').value));

  if (etype === '' || isNaN(eamount) || eamount <= 0) {
    alert('Enter valid data');
  } else {
    if (eamount <= amt.balance) {
      amt.spend += eamount;
      amt.balance -= eamount;
      updateLocalStorageAndUI();
      updateUI(etype, eamount, 'expense');
    } else {
      ee.innerHTML=`insufficient balance`
    }
  }
}

function updateLocalStorageAndUI() {
  localStorage.setItem('budgetData', JSON.stringify(amt));
}
function updateUI(type, amount, transactionType) {
  if (transactionType === 'income') {
    ball.innerHTML = `$${amt.balance}`;
    taa.innerHTML += `<tr>
      <td>${type}</td>
      <td><span class="text-success">+${amount}</span></td>
      <td>${amt.balance}</td>
    </tr>`;
  } else if (transactionType === 'expense') {
    spee.innerHTML = `$${amt.spend}`;
    ball.innerHTML = `$${amt.balance}`;
    exee.innerHTML += `<tr>
      <td>${type}</td>
      <td><span class="text-danger">-${amount}</span></td>
      <td>${amt.balance}</td>
    </tr>`;
  }
}

window.onload = function () {
  const storedData = localStorage.getItem('budgetData');
  if (storedData) {
    amt = JSON.parse(storedData);
    ball.innerHTML = `$${amt.balance}`;
    spee.innerHTML = `$${amt.spend}`;
  }
};