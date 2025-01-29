const calculator = {
    currentInput : [],
    prevInput : [],
    operator : '',
    add : function(value){
        this.currentInput.push(Number(value));
    },
    storePrevInput : function(){
        this.prevInput = this.currentInput;
        this.currentInput = [];
    },
    compute : function(){
        let x = Number(this.prevInput.join(""));
        let y = Number(this.currentInput.join(""));
        switch(this.operator){
            case '+':
                return x + y;
            case '*':
                return x * y;
            case '-':
                return x - y;
            case '/':
                return x / y;
        } 
    },
    clear: function(){
        this.operator = '';
        this.currentInput = [];
        this.prevInput = [];
    },
}


const updateDisplay = function(){
    let outputDisplay = document.querySelector(".result");
    outputDisplay.textContent = calculator.currentInput.join("");
}


const buttonClick = function(){
    let keypad = document.querySelector(".keypad");
    keypad.addEventListener("click", (e) => {
        if(e.target.className == "operand"){
            calculator.add(e.target.textContent);
            updateDisplay();
        }
        else if(e.target.className== "operator"){
            calculator.operator = e.target.textContent;
            calculator.storePrevInput();
            updateDisplay();
        } else if(e.target.className== "enter"){
            if(calculator.currentInput.length > 0 && calculator.prevInput.length > 0){
                calculator.currentInput = [calculator.compute()];
                updateDisplay();
            }
        } else if(e.target.className== "clear"){
            calculator.clear();
            updateDisplay();
        }
    })
}



buttonClick();