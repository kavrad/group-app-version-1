const email=document.querySelector('#emailLogin');
const password=document.querySelector('#passwordLogin');
const form=document.querySelector('#form');

async function submitHandler(e){
    try{
  e.preventDefault();
   const obj={
    email:email.value,
    password:password.value
   }
   let response=await axios.post("http://localhost:1000/user/login",obj);
   console.log(response);
  localStorage.setItem('token',response.data.data.token);
   let id=response.data.id;
   if(response.data.data.responseEmail.email === email.value){
    alert("User logged in sucessfully");
    window.location.href="http://localhost:1000/chat";
    
   }else if(response.data.data.responseEmail.password !== password.value){
    console.log(response);
 }
}catch(err){
    alert("The user does not exist");
}
}

form.addEventListener('submit',submitHandler);