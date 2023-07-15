// .. Buttons and all input output field selected

const button1 = document.querySelector("#no-1")
const button2 = document.querySelector("#no-2")
const button3 = document.querySelector("#no-3")
const button4 = document.querySelector("#no-4")
const button5 = document.querySelector("#no-5")
const button6 = document.querySelector("#no-6")
const button7 = document.querySelector("#no-7")
const button8 = document.querySelector("#no-8")
const button9 = document.querySelector("#no-9")
const button0 = document.querySelector("#no-0")

const buttonAdd = document.querySelector("#add")
const buttonMinus = document.querySelector("#minus")
const buttonTimes = document.querySelector("#times")
const buttonDivide = document.querySelector("#divide")
const buttonClear = document.querySelector("#clear")
const calculator = document.querySelector(".main")


const inputField = document.querySelector("#input")


// variable declaration those will pass as function arguments

let data1,data2,result=0
let operation =''

// function defination for all operators 

function method(value1,value2,work){
    switch(work){
        case "+":
            return(value1 + value2)
            break;

        case "-":
            return(value1-value2)
            break;

        case "*":
            return(value1*value2)
            break;

        case "/":
            return(value1/value2)
    }

}

// Event Bubbling concept for taking input

calculator.addEventListener("click", (event)=>{
    switch(event.target.id){
        case "no-0":
            inputField.value+= 0
            break;

        case "no-1":
            inputField.value+= 1
            break;

        case "no-2":
            inputField.value+= 2
            break;

        case "no-3":
            inputField.value+= 3
            break;

        case "no-4":
            inputField.value+= 4
            break;
        
        case "no-5":
            inputField.value+= 5
            break;
        
        case "no-6":
            inputField.value+= 6
            break;
        
        case "no-7":
            inputField.value+= 7
            break;

        case "no-8":
            inputField.value+= 8
            break;

        case "no-9":
            inputField.value+= 9
            break;

        case "decimal":
            inputField.value+="."
            break;

        case "add":
            operation="+"
            inputField.value= `${Number(inputField.value)}+`
            break;

        case "minus":
            operation="-"
            inputField.value= `${Number(inputField.value)}-`
            break;


        case "times":
            operation="*"
            inputField.value= `${Number(inputField.value)}*`
            break;
    
         case "divide":
            operation="/"
            inputField.value= `${Number(inputField.value)}/`
            break;

        case "equals":
            data2= inputField.value
            data2= data2.split(operation)
            data1= Number(data2[0])
            data2= Number(data2[data2.length-1])
            if(result){
                data1=Number(result)
            }

            result= method(data1,data2,operation)
            inputField.value=result
            break;

        case "clear":
            inputField.value=''
            data1,data2,result=0
            operation=''
            break;
    
    }

})