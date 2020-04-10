const loginCross=document.getElementById("cross");
const customer=document.getElementById("loginC");
const hotel=document.getElementById("loginH");
const overlay=document.getElementById("loginOverlay");
const gotoLogin=document.getElementById("gotoLogin");
const registrationChoice1=document.getElementById("btn1");
const registrationChoice2=document.getElementById("btn2");
const pwchecker1=document.getElementById("pw1");
const pwchecker2=document.getElementById("pw2");
const registrationDone=document.getElementById("submit");



gotoLogin.addEventListener('click',function(){maximizeLoginPanel()},false);
loginCross.addEventListener('click',function(){minimizeLoginPanel()},false);
customer.addEventListener('click',function(){modifyBTNlogin(hotel,customer)},false);
hotel.addEventListener('click',function(){modifyBTNlogin(customer,hotel)},false);
registrationChoice1.addEventListener('click',function(){modifyBTNcss(registrationChoice2,registrationChoice1)},false);
registrationChoice2.addEventListener('click',function(){modifyBTNcss(registrationChoice1,registrationChoice2)},false);
registrationDone.addEventListener('click',function(){checkpw(pwchecker1,pwchecker2)},false);


function minimizeLoginPanel(){
    overlay.style.display="none";
    console.log("Login Minimised");
    timesClosed++;
    console.log(timesClosed);
};

function maximizeLoginPanel(){
    overlay.style.display="inherit";
    console.log("Login Maximised");

};

function modifyBTNcss(regGone,regStay){
    regGone.style.display="none";
    regStay.style.padding="10px 10%";
    regStay.style.transition="2s";
    console.log("EXECUTED"); 
}

function modifyBTNlogin(regGone,regStay){

    if(regStay==loginH)
    {
        hotex:
        regStay.style.float="left";
        regGone.style.display="none";
        regStay.style.padding="10px 20%";
        regStay.style.margin="5% 34%";
        regStay.style.transition="2s";
        console.log("EXECUTED");
    }
    else
    {
        custox:
        regGone.style.display="none";
        regStay.style.padding="10px 20%";
        regStay.style.margin="5% 34%";
        regStay.style.transition="2s";
        console.log("EXECUTED"); 
    }
    
}

function checkpw(pw1,pw2){
    if(pw1==pw2)
    {
        alert("REGISTRATION DONE!");
    }
    else if (pw1==pw2 && pw2=='')
    {
        alert("Please enter a valid passcode.");
    }
    else if(pw1!=pw2)
    {
        alert("Passcode does not match. Please try again");
    }
}
