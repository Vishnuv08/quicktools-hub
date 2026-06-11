function toggleDark(){document.body.classList.toggle('dark');}
function emi(){
let p=+loan.value,r=(+rate.value/12/100),n=(+years.value*12);
let e=(p*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
emiResult.innerText='Monthly EMI: '+e.toFixed(2);
}
function bmi(){
let b=kg.value/((cm.value/100)**2);
bmiResult.innerText='BMI: '+b.toFixed(1);
}
function ageCalc(){
let d=new Date(dob.value);
let age=new Date().getFullYear()-d.getFullYear();
ageResult.innerText='Age: '+age+' years';
}
