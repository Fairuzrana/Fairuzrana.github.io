function formValidation() 
{
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var uphonenumber = document.registration.phonenumber;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex;
    
    console.log("id ",uid)
    document.getElementById("desc").value=uid;
}