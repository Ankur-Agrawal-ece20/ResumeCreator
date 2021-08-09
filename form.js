
function performValidation(){  
    var uname = document.personaldetails.username;  
    var uadd = document.personaldetails.address;  
    var ucountry = document.personaldetails.country;  
    var uphn = document.personaldetails.phoneno;  
    var uemail = document.personaldetails.email;  
    var umsex = document.personaldetails.msex;  
    var ufsex = document.personaldetails.fsex; 
    var desc = document.personaldetails.desc; 
    var eng=document.personaldetails.en.checked;
    var neng=document.personaldetails.nonen.checked;
    var lang="English and others"
    if(eng==false) lang="Others"
    if(neng==false) lang="English only"
    const details=["pass",uname.value, uadd.value, ucountry.value, uphn.value, uemail.value,umsex, lang,desc.value]
    console.log(details)
 
            if(allLetter(uname)){  
                if(alphanumeric(uadd)){   
                    if(countryselect(ucountry)){
                        if(allnumeric(uphn)){
                            if(ValidateEmail(uemail)){  
                                if(validsex(umsex,ufsex)){  
                                    return details
                                }  
                            }   
                        }  
                    }   
                }  
            }  
            details[0]="fail"
            return details
}  

function allLetter(uname){   
    var letters = /^[a-z ,.'-]+$/i   //Regex
    if(uname.value.match(letters)){  
        return true;  
    }  
    else{  
        alert('Username must have alphabet characters only');  
        uname.focus();  
        return false;  
    }  
}  

function alphanumeric(uadd){   
    var letters = /^[0-9a-zA-Z]+$/;  
    if(uadd.value.match(letters)){  
        return true;  
    }  
    else{  
        alert('User address must have alphanumeric characters only');  
        uadd.focus();  
        return false;  
    }  
} 

function countryselect(ucountry){  
    if(ucountry.value == "Default"){  
        alert('Select your country from the list');  
        ucountry.focus();  
        return false;  
    }  
    else{  
        return true;  
    }  
}  

function allnumeric(uphn){   
    var numbers = /^[0-9]+$/;  
    if(uphn.value.match(numbers)){  
        return true;  
    }  
    else{  
        alert('ZIP code must have numeric characters only');  
        uzip.focus();  
        return false;  
    }  
}  

function ValidateEmail(uemail){  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(uemail.value.match(mailformat)){  
        return true;  
    }  
    else{  
        alert("You have entered an invalid email address!");  
        uemail.focus();  
        return false;  
    }  
}

function validsex(umsex,ufsex){  
    x=0;  
    if(umsex.checked){  
        x++;  
    } 
    if(ufsex.checked){  
        x++;   
    }  
    if(x==0){  
        alert('Select Male/Female');  
        umsex.focus();  
        return false;  
    }  
    else{  
        alert('Form Successfully Submitted');  
        return true;
    }  
}  
  