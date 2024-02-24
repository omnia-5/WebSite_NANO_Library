//motion of the sign in and regester pages
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

function home() {
  window.location.href = "page7.html";
}
function admin() {
  window.location.href =
    "file:///C:/Users/DELL/Desktop/My_Projects/projects of First Year/Web_project/admin page .html";
}

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (document.getElementById("re_quired1").value == "") {
    alert("You Must Fill Email");

    return false;
  }
  if (document.getElementById("re_quired2").value == "") {
    alert("You Must Fill Password");

    return false;
  }
  if (
    document.getElementById("re_quired1").value == "nano123@gmail.com" &&
    document.getElementById("re_quired2").value == "123456"
  ) {
    admin();
    return true;
  }
  if (document.getElementById("re_quired2").length < 6) {
    document.getElementById("re_quired2").length =
      "password must be greater than 6";
    return false;
  } else {
    home();
    return true;
  }
});

// function limit(){
// 	var pass=document.
// 	if()
// }

//validation of the sign in and regester pages

// var email=document.forms['form']['email'];
// var passward=document.forms['form']['passward'];

// var email_error=document.getElementById('email_error');
// var pass_error=document.getElementById('pass_error');

// email.addEventListener('textInput',email_verify);
// passward.addEventListener('textInput',pass_verify);
// function validated(){
//     if(email.value.lengh < 9){
//         email.style.border="1px solid red";
//         email.error.style.display="block";
//         email.focus();
//         return false;
//     }
//     if(pass.value.lengh < 6){
//         pass.style.border="1px solid red";
//         pass.error.style.display="block";
//         pass.focus();
//         return falspass
// }
// function email_verify(){
//     if(email.value.length>=9){
//         email.style.border="1px solid green";
//         email.error.style.display="none";
//         return true;
//     }
// }
// function pass_verify(){
//     if(passward.value.length >=6){
//         passward.style.border="1px solid green";
//         passward.error.style.display="none";
//         return true;
//     }
// }
// function redirect() {
//         window.location="homePage.html"
//     }

// const signUp=e => {
//     let formData={
//         username:document.getElementById("username").Value,
//         email:document.getElementById("email").Value,
//         passward:document.getElementById("passward").Value,
//     }
//     localStorage.setItem('formData',JSON.stringify(formData));
//     dispData();
//     console.log(localStorage.getItem('formData'))
//     e.preventDefault();
// }
//     const username = document.getElementById('username')
//     const passward = document.getElementById('name')
//     const email = document.getElementById('name')
//     const form = document.getElementById('form')
//     const errorElement= document.getElementById('error')

//     form.addEventListener('Register',() =>{
//         let messages=[]
// e.preventDefault()
// if (username.value=== ''|| username.value==null){
//     messages.push('Name is required')
// }
// if(passward.value.length<=6){
//     messages.push('Passward must be longer than 6 characters')
// }
// if(passward.value.length>=20){
//     messages.push('Passward must be less than 20 characters')
// }
// if(passward.value ==='passward'){
//     messages.push('passward cannot be passward')
// }
// if(messages.length>0){
//     e.preventDefault()
//     errorElement.innerText=messages.join(',')
// }
//     })

//     function dispData(){
//         if(localStorage.getItem('formData')){
//             let{username,email,passward}=JSON.parse(localStorage.getItem('formData'));
//         var output=document.getElementById('output');
//         output.innerHTML=`
//         <table>
//         <tbody>
//         <tr>
//         <td> Name </td>
//         <td> &(name)</td>
//         </tr>
//         <tr>
//         <td> Email </td>
//         <td> &(email)</td>
//         </tr>
//         <tr>
//         <td> Passward </td>
//         <td> &(passward)</td>
//         </tr>
//         </tbody>
//         </table>

//         `;
