function calcPct(){
let p=+document.getElementById('part').value;
let w=+document.getElementById('whole').value;
document.getElementById('pct').innerText=((p/w)*100).toFixed(2)+'%';
}
function calcBMI(){
let kg=+document.getElementById('kg').value;
let cm=+document.getElementById('cm').value;
let bmi=kg/((cm/100)**2);
document.getElementById('bmi').innerText='BMI: '+bmi.toFixed(1);
}
