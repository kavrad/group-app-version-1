console.log('kavya');
const form=document.querySelector('#form');
const name=document.getElementById('name');
const email=document.getElementById('email');
const phoneNumber=document.getElementById('phone-number');
console.log(phoneNumber)
const password=document.getElementById('password');
console.log(form);
async function submitHandler(){
    const obj={
        name:name.value,
        email:email.value,
        phoneNumber:phoneNumber.value,
        password:password.value
    }
    console.log(obj);
    let response=await axios.post('http://localhost:1000/add-user',obj);
   alert(`${response.data.message}`);
    window.location.href="http://localhost:1000/login";
}
form.addEventListener('submit',submitHandler);