// validate Name  ==================>
function nameValid(name1) {
    console.log(name1);
    let pattname = /(\w+) (\w+)/;
    text = (name1 === "" ? "Your name must not be empty" : !name1.match(pattname) ? "enter first and last name" : "");
    document.getElementById("text_error").innerHTML = text;
}
// validate Email  ==================>
function mailValid(mail) {
    console.log(mail);
    let pattmail = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    text = (mail === "" ? "Your email must not be empty" : !mail.match(pattmail) ? "Unvalid email" : "");
    document.getElementById("email_error").innerHTML = text;
}
// validate Password  ==================>
function passValid(pass) {
    console.log(pass);
    let pattpass = /\w+\d+[!@#\$%\^&]+$\{8,}/;
    text = (pass === "" ? "Password must not be empty" : pass.length < 8 ? "Password must not be 8 characters " : !pass.match(pattpass) ? "Password must has at least one of the following: [!, @, #, $, %, &, *]" : "");
    document.getElementById("password_error").innerHTML = text;
}
document.getElementById("btn").addEventListener('click', function () {
    var name1 = document.getElementById("name1").value;
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    nameValid(name1);
    mailValid(mail);
    passValid(pass);
    alert ("Your name is :"+ name1 + /n + "Your Email is :" + mail +/n+ "Your password is :" + pass);   
});
// convert string  to image ==================>
document.getElementById("conver").addEventListener('click', function linki() {
    document.getElementById("link").style.display = "none";
    document.getElementById("link2").style.visibility = "visible";
});