document.getElementById('loan-form').addEventListener('submit',function(e){
    document.getElementById('results').style.display="none";
     document.getElementById('loading').style.display ="block";
    setTimeout(calculate , 2000);
    e.preventdefault();
});

function calculate(e) {
    const amount = document.getElementById('loan_amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly_payment');
    const totalAmount = document.getElementById('total_amount');
    const totalInterest = document.getElementById('total_interest');

   
    const principal = parsefloat(amount.value);
    const calculatedInterest = parsefloat(interest.value)/100/12;
    const calculatedPayment = parsefloat(years.value*12);
    const x = Math.pow(1+calculatedInterest , calculatedPayment);
    const monthly = (principal * x * calculatedInterest)/(x-1);

    if( isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalAmount.value= (monthly * calculatedPayment). toFixed(2);
        totalInterest.value = (monthly * calculatedPayment -principal).toFixed(2);
        document.getElementById('results').style.display="block";
        document.getElementById('loading').style.display ="none";
    }
    else{
        showAlert('please enter the amounts');
    }
    e.preventdefault();
}
function showAlert(error){
    const errorDiv= document.createElement('div');
    errorDiv.className = "alert alert-danger";
    errorDiv.appendChild(document.createTextNode(error));
    const card = document.querrySelector('.card');
    const heading = document.querrySelector('.heading');
    card.insertBefore(errorDiv , heading);
    setTimeout(function() {
        document.querrySelector('.alert').remove();
    }, 3000);
}
