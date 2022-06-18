console.log("Shivam");
document.getElementById('successAlert').style.display = 'none';
document.getElementById('failureAlert').style.display = 'none';

const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const inputContact = document.getElementById('inputContact');
// console.log(inputName,inputEmail,inputContact)
let isValid = {
    name: true,
    contact: true,
    email: true
}

inputName.addEventListener('blur', ()=>{
    console.log("name is blurred")
    // Validating the name
    let regex = /^[A-Z]([a-z0-9A-Z]){2,19}$/;
   
    let str = inputName.value;
    if (!regex.test(str)){
        console.log("name is invalid");
        inputName.classList.add('is-invalid');
        isValid.name = false;
    }
    else{
        console.log("name is valid")
        inputName.classList.remove('is-invalid');
        isValid.name = true;
    }
})
        
    
inputEmail.addEventListener('blur', ()=>{
    console.log("email is blurred")
    let str = inputEmail.value;
    let regex = /^[A-Za-z0-9_\-\.\$@\*]+@[A-Za-z0-9_\-\.]+\.[a-zA-Z]{2,8}$/;
    if (!regex.test(str)){
        console.log("Email is invalid");
        inputEmail.classList.add('is-invalid');
        isValid.email = false;
    }
    else{
        console.log("Email is valid")
        inputEmail.classList.remove('is-invalid');
        isValid.email = true;
    }
        
})
inputContact.addEventListener('blur', ()=>{
    console.log("phone is blurred")
    let regex = /^[0-9]{10}$/;
    let str = inputContact.value
    if (!regex.test(str)){
        console.log("Contact is invalid");
        inputContact.classList.add('is-invalid');
        isValid.contact = false;
    }
    else{
        console.log("Contact is valid")
        inputContact.classList.remove('is-invalid');
        isValid.contact = true;
    }
        
})

let form = document.getElementsByTagName('form')[0];
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if (isValid.name && isValid.contact && isValid.email){
        // document.getElementById('successAlert').classList.add('show');
        // document.getElementById('failureAlert').classList.remove('show');
        document.getElementById('successAlert').style.display = 'block';
        document.getElementById('failureAlert').style.display = 'none';

    }
    else{
        console.log("Please enter a valid details")
        // document.getElementById('failureAlert').classList.add('show');
        // document.getElementById('successAlert').classList.remove('show');
        document.getElementById('failureAlert').style.display = 'block';
        document.getElementById('successAlert').style.display = 'none';

    }
})
    
        
// setTimeout(()=>{
//     document.getElementById('alert').classList.remove('show');
// },200);


