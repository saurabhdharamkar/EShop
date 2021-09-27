let mail1=document.getElementById("email");
let spanNode1=document.getElementById("error1");

function validate1(){

    spanNode1.innerHTML="";
    let mail=mail1.value;
    let subs=mail.substring(mail.indexOf('@'+1));

    if(mail==''){
        spanNode1.innerHTML="This Field is Required";
        mail1.style.border="3px solid red";
        return false;
    }
    else if(mail.length<4||mail.length>8){
        spanNode1.innerHTML="mail should have 4 to 8 char";
        mail1.style.border="3px solid red";
        return false;
    }
        else if(!mail.includes('@')||subs==''){
            spanNode1.innerHTML="Invalid mail";
            mail1.style.border="3px solid red";
            return false;
    }else{
        mail1.style.border="3px solid green";
        return true;
    }
}


//

let pass=document.getElementById("password");
let spanNode2=document.getElementById("error2");

function validate2(){
    spanNode2.innerHTML="";

    let pass1=pass.value;

    if(pass1==''){
        spanNode2.innerHTML="This Field is Required";
        pass.style.border="3px solid red";
        return false;
    }
    else if(pass1.length<4||pass1.length>8){
        spanNode2.innerHTML="Password Should have 4 to 8 char";
        pass.style.border="3px solid red";
        return false;

    }
   else{
        pass.style.border="3px solid green";
        return true;
    }
}

function validateLogin(){
    console.log("pass");
    let val1=validate1();
    let val2=validate2();
    return (val1&&val2);
}

//

let name2=document.getElementById("name");
let spanNode3=document.getElementById("error3");

function validate3(){
    spanNode3.innerHTML="";

    let name1=name2.value;
    //let subs=mail.substring(mail.indexOf('@'+1));

    if(name1==''){
        spanNode3.innerHTML="This Field is Required";
        name2.style.border="2px solid red";
        return false;
    }else{
   
        name2.style.border="2px solid green";
        return true;
    }
    }

    //
    let mail5=document.getElementById("email");
let spanNode4=document.getElementById("error4");

function validate4(){
     spanNode4.innerHTML="";
    let mail7=mail5.value;
    let subs=mail7.substring(mail7.indexOf('@'+1));

    if(mail7.length==''){
        spanNode4.innerHTML="This Field is Required";
        mail5.style.border="2px solid red";
        return false;
    }
    else if(mail7.length<4||mail7.length>8){
        spanNode4.innerHTML="mail should have 4 to 8 char";
        mail5.style.border="2px solid red";
        return false;
    }
        else if(!mail7.includes('@')||subs==''){
            spanNode4.innerHTML="Invalid mail";
            mail5.style.border="2px solid red";
            return false;
    }else{
        mail5.style.border="2px solid green";
        return true;
    }
}

//

let password1=document.getElementById("password");
let spanNode5=document.getElementById("error5");
function validate5(){
    spanNode5.innerHTML="";
    let password2=password1.value;
    let regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");

    if(password2==''){
        spanNode5.innerHTML="This Field is Required";
        password1.style.border="3px solid red";
        return false;
    }
    else if(password2.length<4 || password2.length>8){
        spanNode5.innerHTML="Password Should be4 to 8 character long";
        password1.style.border="3px solid red";
        return false;
    }
    else if(regExp.test(password2)==false){
        spanNode5.innerHTML="Password should be alphanumeric with special symbol";
        password1.style.border="3px solid red";
        return false;
    }
    else{
        password1.style.border="3px solid green";
        return true;
    }
    }

    //

    let cpassNode=document.getElementById("cpassword");
    let spanNode6=document.getElementById("error6");
    function validate6(){
        spanNode6.innerHTML="";
        let password2=password1.value;
        let cpassword=cpassNode.value;
        //let regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    
        if(cpassword==''){
            spanNode6.innerHTML="This Field is Required";
            cpassNode.style.border="3px solid red";
            return false;
        }
        else if(cpassword!==password2){
            spanNode6.innerHTML="Password Should be Match";
            cpassNode.style.border="3px solid red";
            return false;
        }
        
        else{
            cpassNode.style.border="3px solid green";
            return true;
        }
        }

        function validateReg(){
            console.log("form");
            let val3=validate3();
            let val4=validate4();
            let val5=validate5();
            let val6=validate6();

            return (val3&&val4&&val5&&val6);
        }
    


