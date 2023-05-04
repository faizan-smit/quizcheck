
const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},
{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}]


var question = document.getElementById('question');

var index, quizLength, options, score;

index = 0;
score = 0;
quizLength = quizData.length;
options = document.querySelectorAll("input[type='radio']")

function start(){


    if(index == quizLength){

        endquiz()

    }
    else{

        reset()

var quizObject = quizData[index];
    question.innerHTML = quizObject.question;
    options[0].nextElementSibling.innerText = quizObject.a;
    options[1].nextElementSibling.innerText = quizObject.b;
    options[2].nextElementSibling.innerText = quizObject.c;
    options[3].nextElementSibling.innerText = quizObject.d;
    }

    if(index == (quizLength-1)){
        document.getElementById('nextbutton').setAttribute('value','Submit')
    }
    

}

var nextButton = document.getElementById('nextbutton');

function next(){

    var userAns1 = getAns();
    var quizObject = quizData[index];
    if(userAns1 == quizObject.correct){
        score++
    }

    index++
    console.log(score)
    console.log(userAns1)
    start()

}

function getAns(){

    var userAns;
    options.forEach(function (a) {

        if(a.checked){
            userAns = a.value;
            userAns = userAns.toLowerCase();
            console.log(userAns);
        }
        
    });

    return userAns;

}

function reset(){

    options.forEach(function (a){
        a.checked = false;
    })
}

function endquiz(){

    var finalscore = (score*100)/quizLength
    var grade;
    if(finalscore>=80){
        grade = "Excelent"
    }
    else if(finalscore>=70){
        grade = "Very Good Score"
    }
    else if(finalscore>=50){
        grade = "Good Score"
    }
    else if(finalscore<50){
        grade = "Fail"
    }

    var useremailname = localStorage.getItem('email')
    var result =  document.getElementById('QuestionAndOptions');
        document.getElementById('stopwatch-body').innerHTML = " ";
        document.getElementById('stopwatch-body').remove();
        result.innerHTML ="Student ID: " + useremailname + "<br>Your Result: " + grade + "<br>Your Score: " + finalscore + "%";
        result.className += " results";
    

}


////////////////   Timer  ////////////////////

        var minuteElement = document.getElementById('s-minutes');
        var secondsElement = document.getElementById('s-seconds');
        var milisecondsElement = document.getElementById('s-miliseconds');

        var $hour, $min, $sec, $milisec, $time;
        $hour = 0;
        $min = 0;
        $sec = 0;
        $milisec = 0;

        function startTimer(){

            $time = setInterval(function(){

                $milisec++
                milisecondsElement.innerHTML = $milisec
                if ($milisec < 10) {

                milisecondsElement.innerHTML = "0" + $milisec
                    
                }
                if($milisec >= 99){
                    $sec ++
                    secondsElement.innerHTML = $sec
                    if ($sec < 10) {

                        secondsElement.innerHTML = "0" + $sec
                    
                    }
                    $milisec = 0

                    if ($sec>=59) {
                        $min++
                        minuteElement.innerHTML = $min
                        if ($min < 10) {

                            minuteElement.innerHTML = "0" + $min
                    
                        }
                        $sec = 0;
                        
                        
                    }
                }

            },1)


        }


startTimer();

setInterval(function(){


    if($min == 1){

        endquiz()

    }


},100)

////////////////////        ////////////////////////

start();
        