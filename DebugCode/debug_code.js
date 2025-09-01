    
    function performOperation() {
        // Get user input from input fields
        let num1 = parseInt(document.getElementById('input1').value);
        let num2 = parseInt(document.getElementById('input2').value);
        let op=document.getElementById('operator').value;
        // Check if inputs are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
            // Perform the operation
            let result=0;
            if(num1%2==0){
            result = multiply(num1, num2);
            }
            else{
            result = arithmeticoper(num1,num2,op);
            }
            // Display the result
            displayResult(result);
        } else {
            displayResult('Please enter valid numbers');
        }
    }

    function multiply(a, b) {
        // Introduce a debugger statement to pause execution
        debugger;

        // Multiply the numbers
        return a * b;
    }

    function displayResult(result) {
        // Display the result in the paragraph element
        const resultElement = document.getElementById('result');
        resultElement.textContent = `The result is: ${result}`;
    }
    

function arithmeticoper(a,b,op){
    debugger;
    switch(op){
        case '+': return (a+b);
                  break;
        case '-': return (a+b);
                  break;
        case '*': return (a*b);
                  break;
        case '/': try{
                    if(b==0){
                    throw new Error("Division by zero is not allowed");
                    }
                    return a/b;
                }
                catch(error){
                    console.error("Error found",error.message);
                }                  
                break;
        default: console.log("Choose available operators!");
                  break;
    }
}