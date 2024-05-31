let display = '';
let currentOperator = null;
let firstOperand = null;
// digunakan untuk mengupdate display jika ada number
function handleNumber(number){
    display += number;
    updateDisplay()
}
//digunakan untuk meng handle operator membedakan perlakuan dengan angka
function handleOperator(operator){
    if(currentOperator !== null){
        calculate()
    }
    // saya masih tidak paham kegunaan parseFloat
    firstOperand = parseFloat(display);
    currentOperator = operator;
    display = '';
}









//function calculate digunakan untuk memberi result akhir
function calculate(){
    if(currentOperator == null || firstOperand === null) return;
    let secondOperand = parseFloat(display);
    let result;

    switch (currentOperator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
            case '/':
                result = firstOperand / secondOperand;
                break;
                case '-':
                    result = firstOperand - secondOperand;
                    break;
                    case '*':
                        result = firstOperand * secondOperand;
                        break;
    }
    display = result.toString();
    currentOperator = null;
    firstOperand = null;
    updateDisplay();

}
// function digunakan untuk meng update display setiap kali tombol ditekan
function updateDisplay(){
    document.getElementById('output').innerHTML = display || '0';
}

//ini digunakan untuk menghapus semuanya
function clearDisplay(){
    display = '';
    updateDisplay()
}