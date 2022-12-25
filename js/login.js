let tab = document.querySelector(".tab-form");
let tabHeader = tab.querySelector(".tab-header");
let tabHeaderElements = tab.querySelectorAll(".tab-header > div");


let tabBody = tab.querySelector(".tab-body");
let tabBodyElements = tab.querySelectorAll(".tab-body > div");


for(let i=0;i<tabHeaderElements.length;i++){
    tabHeaderElements[i].addEventListener("click",function(){
        tabHeader.querySelector(".active").classList.remove("active")
        tabHeaderElements[i].classList.add("active");
    
        tabBody.querySelector(".active").classList.remove("active")
        tabBodyElements[i].classList.add("active");
    });
}


function validoMeRegex() {
    //shkronja e pare e madhe dhe me pas nje numer
    var usernameRegex =  /^[A-Z]{1}[a-zA-Z0-9]+[0-9]{1}$/; //REGEX
    var pwRegex = /^[A-Z][a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{6,}$/ //
    
    var useri = document.getElementById('useri').value;
    
    var pw  = document.getElementById('pw').value;
    
    if(usernameRegex.test(useri)){
        console.log("Username eshte ne rregull");
    }else{
        console.log("Username nuk eshte ne rregull");
    }
    if(pwRegex.test(pw)){
        console.log("Passi eshte ne rregull")
    }else{
        console.log("Passi nuk eshte ne rregull")
    }
   
}

function validoMeRegex2() {
    //shkronja e pare e madhe dhe me pas nje numer
    var usernameRegex =  /^[A-Z]{1}[a-zA-Z0-9]+[0-9]{1}$/; //REGEX
    var pwRegex = /^[A-Z][a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{6,}$/ //
    var emailRegex = /^[a-zA-Z][a-zA-Z0-9_.]+@[a-zA-Z0-9-]+\.(com|net)$/;
    
    var useri = document.getElementById('useri').value;
    
    var pw  = document.getElementById('pw').value;
    var email  = document.getElementById('emaili').value;

    if(usernameRegex.test(useri)){
        console.log("Username eshte ne rregull");
    }else{
        console.log("Username nuk eshte ne rregull");
    }
    if(pwRegex.test(pw)){
        console.log("Passi eshte ne rregull")
    }else{
        console.log("Passi nuk eshte ne rregull")
    }
    if(emailRegex.test(email)){
        console.log("emailio eshte ne rregull")
    }else{
        console.log("emaili nuk eshte ne rregull")
    }
}