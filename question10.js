let timeout;
score = localStorage.getItem("score");
    score = Number(score);
    function showscore(){
        document.getElementById("score").innerHTML= score;
    }
function correctopt(){
    document.getElementById("option1").style.backgroundColor="green";
    document.getElementById("option2").style.display="none"; 
    document.getElementById("option3").style.display="none";
    document.getElementById("option4").style.display="none";
    document.getElementById("callresult").innerHTML="Correct Answer 😁";
    document.getElementById("callresult").style.backgroundColor="green";
    document.getElementById("correct").play();
    score = score + 10;
    document.getElementById("score").innerHTML= score;
    localStorage.setItem("score",score);
    timeout = setTimeout(nextpage,3000);
    
}


function nextpage()
{
    document.getElementById("option1").style.backgroundColor="green"; 
    window.location="thankyou.html";
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