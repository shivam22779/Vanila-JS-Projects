console.log("SHivam")
let screenValue = '';
let input = document.getElementById('screen');
let buttons = document.querySelectorAll('button')

for (item of buttons){
    item.addEventListener('click', (e)=>{
    let buttonText = e.target.innerText;
       console.log(buttonText)
    //    input.value = buttonText
       if (buttonText =='X'){
           buttonText = '*';
           screenValue += buttonText;
           input.value = screenValue;
       }
       else if(buttonText == 'C'){
        screenValue = "";
        input.value = screenValue;
       }
       else if(buttonText == '='){
        input.value = eval(screenValue);
        screenValue = input.value;  
       }
       else{
        screenValue += buttonText;
        input.value = screenValue;
       }
    })
}