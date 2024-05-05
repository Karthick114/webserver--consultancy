const loginForm = document.getElementById("loginForm");

loginForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        const user_login = new URLSearchParams(new FormData(loginForm));
        fetch("http://localhost:8080/login",{
            method : 'POST', 
            body : user_login 
         }).then(res => res.json())
         .then (data => {
            if(data.status){
               if(data.isUser){
                  alert("Login Success");
                  unvisble_Login();

               }else{
                alert("Redirect");
                window.location.href = "/admin";
               }
             }else{
                alert("TryAgain");
                }
         }); 
});

const signUp = document.getElementById("signupForm");

signUp.addEventListener('submit',(event)=>{
    event.preventDefault();
    const user_signup = new URLSearchParams(new FormData(signUp));
    fetch("http://localhost:8080/signup",{
        method : 'POST', 
        body : user_signup
     }).then(res => res.json())
     .then (data => {
        if (data.status){
         window.location.href = "/admin";
         }else{
            alert("NO");
            }
     });    
});