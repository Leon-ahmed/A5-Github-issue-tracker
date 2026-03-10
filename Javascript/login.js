document.getElementById('login-btn').addEventListener('click',function(){
 
const usernameInput=document.getElementById('name');
const username=usernameInput.value;
console.log(username);


const passwordInput=document.getElementById('password');
const password=passwordInput.value;
console.log(password);



if(username==="admin" && password==="admin123"){
   alert("Login successfull");
   window.location.assign("./homepage.html");

}
else{
    alert("Wrong Password");
}
})