document.getElementById('btn-diposit').addEventListener('click', function(){
    const depositeFiled = document.getElementById('deposite-field');
    const newDepositAmountString = depositeFiled.value;
    const newDepositAmount = parseFloat(newDepositAmountString);



    const depositeTotalElement = document.getElementById('diposite-total') ;
    const perviousDepositTotalString = depositeTotalElement.innerText;
    const perviousDepositTotal= parseFloat(perviousDepositTotalString)



    const curentDepositTotal = perviousDepositTotal + newDepositAmount;
    depositeTotalElement.innerText = curentDepositTotal;
    

    const balanceTotal = document.getElementById('balance-total');
    const perviousBalanceTotalString = balanceTotal.innerText;
    const perviousBalanceTotal = parseFloat(perviousBalanceTotalString);

    const curentBalance = perviousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = curentBalance;

    depositeFiled.value ='';
})