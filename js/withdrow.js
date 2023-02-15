 document.getElementById('btn-withdrow').addEventListener('click', function(){
    const withdrowFlid = document.getElementById('withdrow-felid');
    const newWithdrowAmmountString = withdrowFlid.value;
    const newWithdrowAmmount = parseFloat(newWithdrowAmmountString);

    withdrowFlid.value = '';


    if(isNaN(newWithdrowAmmount)){
        alert('plase enter a number')
        return
    }

    const withdrowTotalElement = document.getElementById('withdrow-total');
    const perviouswithdrowTotalString = withdrowTotalElement.innerText;
    const perviouswithdrowTotal = parseFloat(perviouswithdrowTotalString);


    const balanceTotalElement = document.getElementById('balance-total');
    const perviousBalanceTotalString = balanceTotalElement.innerText;
    const perviousBalanceTotal = parseFloat(perviousBalanceTotalString);


    if(newWithdrowAmmount > perviousBalanceTotal){
        alert('taka nai');
        return;
    }


    const curentWithdrowTotal = perviouswithdrowTotal + newWithdrowAmmount;
    withdrowTotalElement.innerText = curentWithdrowTotal;
    const curentBalance = perviousBalanceTotal - newWithdrowAmmount;
    balanceTotalElement.innerText = curentBalance;



 })