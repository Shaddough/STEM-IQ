score = localStorage.getItem("score");
    score = Number(score);
    function showscore(){
        document.getElementById("score").innerHTML= score;
    }