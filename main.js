// import './form';
function showper(){
    document.getElementById("per").classList.remove('hideme')
    document.getElementById("edu").classList.add('hideme')
    document.getElementById("pro").classList.add('hideme')
}

function showedu(){
    document.getElementById("edu").classList.remove('hideme')
    document.getElementById("per").classList.add('hideme')
    document.getElementById("pro").classList.add('hideme')
}

function showpro(){
    document.getElementById("pro").classList.remove('hideme')
    document.getElementById("per").classList.add('hideme')
    document.getElementById("edu").classList.add('hideme')
}
showper()

function addskill(){
    document.getElementById("skillbox").innerHTML+=`<div class='skill'>
        <input class='inputbox' type='text' name='skill'/>
        <input class='inputbox' style='width: max-content;' type='number' min='0' max='5' step='1'></input>
    </div>`
}
function download(){
    document.getElementById("header").classList.add("hideme")
    document.getElementById("content").style.display="block"
    document.getElementById("formpart").classList.add("hideme")
    document.getElementById("preres").classList.add("hideme")
    document.getElementById("prntres").classList.add("hideme")
    print()
    document.getElementById("header").classList.remove("hideme")
    document.getElementById("content").style.display="grid"
    document.getElementById("formpart").classList.remove("hideme")
    document.getElementById("preres").classList.remove("hideme")
    document.getElementById("prntres").classList.remove("hideme")
}

function updateper(details){
    if(details[0]=="fail"){
        alert('Cannot update');
        return;  
    }
    var sex="Female"
    if(details[6].value==true) sex="Male";
    document.getElementById("name").innerHTML=details[1]
    document.getElementById("sex").innerHTML=sex
    document.getElementById("lang").innerHTML=details[7]
    document.getElementById("address").innerHTML=details[2]
    document.getElementById("nation").innerHTML=details[3]
    document.getElementById("phnno").innerHTML="&#9742;: "+details[4]
    document.getElementById("useremail").innerHTML="&#8512;: "+details[5]
    document.getElementById("aboutpara").innerHTML=details[8]
    return false;
}
function updateedu(){
    var schl = document.educationdetails.Schooldesc.value;  
    var coll = document.educationdetails.Collegedesc.value;  
    const skills = document.getElementsByClassName('skill');
    
    if(schl=="" || coll=="" || skills[0].childNodes[0].value==""){
        alert('Please fill all the fields or write not applicable!');
        return;
    }  
    document.getElementById("school").innerHTML=schl
    document.getElementById("college").innerHTML=coll
    var box=document.getElementById("skills")
    box.innerHTML="<hr><h1>Key Skills</h1>"
    for(var i=0;i<skills.length;i++){
        ele=skills[i]
        box.innerHTML+="<div><strong>"+String(ele.childNodes[3].value)+"&#9734;:</strong> "+ele.childNodes[1].value;
    }
    alert("Done")
}
function updateprt(){
    var work = document.projectdetails.Workdesc.value;  
    var pro = document.projectdetails.Projectdesc.value;  
    var hvwork = document.projectdetails.hvwrk.checked;  
    var hvpro = document.projectdetails.hvpro.checked;  
    
    if((hvwork==true && work=="") || (hvpro==true && pro=="")){
        alert('Please fill all the mark fields!');
        return;
    }  
    if(hvwork==false && hvpro==false){
        alert("At least one field require!");
        return;
    }
    console.log(work,pro)
    if(hvwork==false){
        document.getElementById("achievementdiv").style.display="none";
    }
    else{
        document.getElementById("achievementpara").innerHTML=work;
    }
    if(hvpro==false){
        document.getElementById("projectdiv").style.display="none";
    }
    else{
        document.getElementById("projectpara").innerHTML=pro;
    }
    alert("Done")
}