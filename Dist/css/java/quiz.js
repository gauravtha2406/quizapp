

let questions = [
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which sign of the zodiac is represented by the Crab?",
        "correct_answer": "Cancer",
        "incorrect_answers": [
            "Libra",
            "Virgo",
            "Sagittarius",
            "Cancer"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which one of the following rhythm games was made by Harmonix?",
        "correct_answer": "Rock Band",
        "incorrect_answers": [
            "Meat Beat Mania",
            "Guitar Hero Live",
            "Rock Band",
            "Dance Dance Revolution"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What type of animal was Harambe, who was shot after a child fell into it&#039;s enclosure at the Cincinnati Zoo?",
        "correct_answer": "Gorilla",
        "incorrect_answers": [
            "Tiger",
            "Panda",
            "Crocodile",
            "Gorilla"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the nickname of the US state of California?",
        "correct_answer": "Golden State",
        "incorrect_answers": [
            "Golden State",
            "Sunshine State",
            "Bay State",
            "Treasure State"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the French word for &quot;hat&quot;?",
        "correct_answer": "Chapeau",
        "incorrect_answers": [
            "Bonnet",
            " &Eacute;charpe",
            " Casque",
            "Chapeau"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the name of Poland in Polish?",
        "correct_answer": "Polska",
        "incorrect_answers": [
            "Pupcia",
            "Polszka",
            "Polska",
            "P&oacute;land"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which of the following card games revolves around numbers and basic math?",
        "correct_answer": "Uno",
        "incorrect_answers": [
            "Go Fish",
            "Uno",
            "Twister",
            "Munchkin"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What zodiac sign is represented by a pair of scales?",
        "correct_answer": "Libra",
        "incorrect_answers": [
            "Aries",
            "Capricorn",
            "Libra",
            "Sagittarius"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "The likeness of which president is featured on the rare $2 bill of USA currency?",
        "correct_answer": "Thomas Jefferson",
        "incorrect_answers": [
            "Thomas Jefferson",
            "Martin Van Buren",
            "Ulysses Grant",
            "John Quincy Adams"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the closest planet to our solar system&#039;s sun?",
        "correct_answer": "Mercury",
        "incorrect_answers": [
            "Mars",
            "Jupiter",
            "Mercury",
            "Earth"
        ]
    }
];


function submitForm(e) {
    e.preventDefault();
    let inputvalue = document.getElementById('welcome-text').value;
    console.log(inputvalue);
    sessionStorage.setItem('name', inputvalue);
    location.href = "quiz.html";

}


let quizcount = 0;
let points=0;
function next() {
    
    let btnanswers=document.querySelector("li.option.active");
    console.log(btnanswers);
    if(btnanswers==questions[quizcount].correct_answer){
        points +=10;
    }
    else{
        console.log("wrong answer")
    }
  
    if(quizcount==questions.length-1){
        sessionStorage.setItem('timers',`${minutes}minutes:${seconds}seconds`)

        location.href="end.html";
        return 
    }
   
    quizcount++;
    console.log(quizcount);
    showresult(quizcount);
}
function showresult(q) {
    let quizbody = document.getElementById('question')

    quizbody.innerHTML = ` <h2>${questions[q].question}</h2>
        <ul class="quiz-option">
            <li class="option">${questions[q].incorrect_answers[0]}</li>
            <li class="option">${questions[q].incorrect_answers[1]}</li>
            <li class="option">${questions[q].incorrect_answers[2]}</li>
            <li class="option">${questions[q].incorrect_answers[3]}</li>
        </ul>`;


    toggleAct();

}


function toggleAct() {
    let options = document.querySelectorAll("li.option");
    for (let i = 0; i < options.length; i++) {
        options[i].onclick=function(){
            for(let j=0; j<options.length; j++){
                if(options[j].classList.contains("active")){
                    options[j].classList.remove("active");
                }

            }
        options[i].classList.add("active");
        }
        
    }
}

