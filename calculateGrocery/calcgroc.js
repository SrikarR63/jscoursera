function calcamt(){
    let v1=parseFloat(document.getElementById("grocery1").value);
    let v2=parseFloat(document.getElementById("grocery2").value);
    let v3=parseFloat(document.getElementById("grocery1").value);
    let totval=(v1+v2+v3);
    document.getElementById('res').innerText = `The total amount is: ${totval}`;
}