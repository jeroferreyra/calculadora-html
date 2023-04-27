const txtOp1 = document.getElementById("op1")
const txtOperacion = document.getElementById("operacion")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular)

function calcular(){
    /* usamos parseFloat para que sea un numero y no un string */
    const operacion = txtOperacion.value
   const op1 = parseFloat(txtOp1.value)
   const op2 = parseFloat(txtOp2.value)
/*usamos break para que frene ahi la operacion sino se terminaria realizando todo, y se realizaria la division */
 if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(op1) && !isNaN(op2)){
   let resultado;
   switch(operacion){
case "+" :
    resultado = op1 + op2
    break;
    case "-":
    resultado = op1 - op2
    break;
    case "*":
        resultado = op1 * op2
        break;
        case "/":
            resultado = op1 / op2
            break;
   }
    
pResultado.innerText = "= "+ resultado
    }  else{
        pResultado.innerText = "calculo imposible"
    }
}
