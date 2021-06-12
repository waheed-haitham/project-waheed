window.onload=pageLoad;
function pageLoad(){
    var contactForm = document.getElementById("contactForm");
    contactForm.onsubmit= validate;
}
function validate(){
    var check = true;
    var f_name = document.getElementById("f-name").value;
    var l_name = document.getElementById("l-name").value;
    var site = document.getElementById("website").value;
    var mail = document.getElementById("email").value;
    var phone = document.getElementById("telephone").value;
    var password = document.getElementById("password").value;

    
    if(f_name == ""){
        alert('Name is required !');
        check= false;
    }
    if(l_name == ""){
        alert('Name is required !');
        check= false;
    }
    
    if(mail == ""){
        alert('E-mail is required !');
        check= false;
    }

    if(password == ""){
        alert('Password is required !');
        check= false;
    }
    
    if(site == ""){
        alert('Website is required !');
        check= false;
    }
    if (phone == "") {

        alert('Phone is required !');
    }
    

    if (!l_name.match(/^[A-Za-z ]+$/)){ //space------------------------------
        alert("only letters or space allowed in name field");
        check= false;
    }
    if (!f_name.match(/^[A-Za-z ]+$/)){ //space------------------------------
        alert("only letters or space allowed in name field");
        check= false;
    }
    if (!mail.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)){
        alert("Email is Not Valid");
        check=false;
    }

    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
        alert("Password is Not Valid, It must contain 8 characters: 1 uppercase, one lowercase, one number and one special character at least");
        check=false;
    }
    
    if (!phone.match(/^[0-9]{11}$/)){

        alert("Phone is not valid");
        check=false;
    }

    if (!site.match(/^(https:\/\/)[a-zA-Z]+\.[a-zA-Z0-9]+\.[a-zA-Z]+/)){
        alert('Website is not valid !');
        check= false;
    }
  
    if(check==true)
    {alert('welcome in our page : Mr.'+ "  " +f_name + "  " +l_name )}

    return check;


}
