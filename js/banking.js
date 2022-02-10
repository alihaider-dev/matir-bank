// Deposit Button Event
document.getElementById('btn-deposit').addEventListener('click', function () {
  //Get Deposit Amount
  const depositAmountField = document.getElementById('deposit-amount');
  const newDepositAmount = parseFloat(depositAmountField.value);

  //Set the amount in Deposit Box
  const currentDeposit = document.getElementById('total-deposit');
  const lastAmountValue = currentDeposit.innerText;
  const lastAmountDeposit = parseFloat(lastAmountValue);
  const grandTotalDeposit = lastAmountDeposit + newDepositAmount;
  currentDeposit.innerText = grandTotalDeposit;

  // Update the total balance
  const totalBalanceValue = document.getElementById('total-balance');
  const totalBalance = totalBalanceValue.innerText;
  const totalBalanceUpdate = parseFloat(totalBalance);

  const totalBalanceCalculate = totalBalanceUpdate + newDepositAmount;
  totalBalanceValue.innerText = totalBalanceCalculate;

  // Clear the deposit amount field
  depositAmountField.value = '';
})

// Withdraw Button Event
document.getElementById('btn-withdraw').addEventListener('click', function () {
  //Get Withdrawal Amount
  const withdrawAmountField = document.getElementById('withdraw-amount');
  const newWithdrawAmount = parseFloat(withdrawAmountField.value);

  //Set Withdrawal
  const currentWithdraw = document.getElementById('total-withdraw');
  const lastWithdrawValue = currentWithdraw.innerText;
  const lastWithdrawAmount = parseFloat(lastWithdrawValue);
  const totalWithdraw = lastWithdrawAmount + newWithdrawAmount;
  currentWithdraw.innerText = totalWithdraw;

  //Update Total Amout Value
  const totalBalanceValue = document.getElementById('total-balance');
  const totalBalance = totalBalanceValue.innerText;
  const totalBalanceUpdate = parseFloat(totalBalance);

  const totalBalanceCalculate = totalBalanceUpdate - newWithdrawAmount;
  totalBalanceValue.innerText = totalBalanceCalculate;



  //Clear the Withdraw Amoutn Field
  withdrawAmountField.value = '';

})

