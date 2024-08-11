let navbar =  document.querySelector('.header .navbar')
    document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#close-navbar').onclick =() =>{
    navbar.classList.remove('active')
}

let accountform =  document.querySelector('.account-form')
    document.querySelector('#account-btn').onclick = () =>{
    accountform.classList.add('active');
}
document.querySelector('#close-form').onclick =() =>{
    accountform.classList.remove('active')
}


let rgbtn = document.querySelector('.account-form .register-btn');
let loginbtn =document.querySelector('.account-form .login-btn');

rgbtn.onclick =() =>{
    rgbtn.classList.add('active');
    loginbtn.classList.remove('active');
    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .registration-form').classList.add('active');
}

loginbtn.onclick =() =>{
    rgbtn.classList.remove('active');
    loginbtn.classList.add('active');
    document.querySelector('.account-form .login-form').classList.add('active');
    document.querySelector('.account-form .registration-form').classList.remove('active');
}






 var scrollbox = document.querySelector('.gallery');
scrollbox.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        scrollbox.scrollLeft += evt.deltaY;
    });

var reviewbox = document.querySelector('.review-slider');
reviewbox.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        reviewbox.scrollLeft += evt.deltaY;
    });







   

 
  
   








 
 

