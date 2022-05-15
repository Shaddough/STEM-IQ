let timeout;
score = 0;
function correctopt(){
    document.getElementById("option1").style.backgroundColor="green";
    document.getElementById("option2").style.display="none"; 
    document.getElementById("option3").style.display="none";
    document.getElementById("option4").style.display="none";
    document.getElementById("callresult").innerHTML="Correct Answer 😁";
    document.getElementById("callresult").style.backgroundColor="green";
    document.getElementById("correct").play();
    score = score + 10;

    timeout = setTimeout(nextpage,3000);
    
}


function nextpage()
{

    document.getElementById("option1").style.backgroundColor="green"; 
    localStorage.setItem("score",score);
    document.getElementById("score").innerHTML=score;
    window.location="Question2.html";
}

function wrongopt1(){
    document.getElementById("option2").style.backgroundColor="red";
    document.getElementById("option1").style.backgroundColor="green";
    document.getElementById("option3").style.display="none";
    document.getElementById("option4").style.display="none";
    document.getElementById("callresult").innerHTML="Wrong Answer 😢";
    document.getElementById("callresult").style.backgroundColor="red";
    document.getElementById("wrong").play();
    timeout = setTimeout(nextpage,3000);
    
}

function wrongopt2(){
    document.getElementById("option3").style.backgroundColor="red";
    document.getElementById("option1").style.backgroundColor="green";
    document.getElementById("option2").style.display="none";
    document.getElementById("option4").style.display="none";
    document.getElementById("callresult").innerHTML="Wrong Answer 😢";
    document.getElementById("callresult").style.backgroundColor="red";
    document.getElementById("wrong").play();
    timeout = setTimeout(nextpage,3000);
    
}

function wrongopt3(){
    document.getElementById("option4").style.backgroundColor="red";
    document.getElementById("option1").style.backgroundColor="green";
    document.getElementById("option2").style.display="none";
    document.getElementById("option3").style.display="none";
    document.getElementById("callresult").innerHTML="Wrong Answer 😢";
    document.getElementById("callresult").style.backgroundColor="red";
    document.getElementById("wrong").play();
    timeout = setTimeout(nextpage,3000);
    
}