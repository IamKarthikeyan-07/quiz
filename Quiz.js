const questions=[
    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text: "Shark", correct:false},
            {text: "Blue Whale", correct:true},
            {text: "Elephant", correct:false},
            {text: "Giraffe", correct:false},
        ]
    },
    {
        question:"Which captain won all icc trophies?",
        answers:[
            {text: "Kapil Dev", correct:false},
            {text: "Ganguly", correct:false},
            {text: "M.S.Dhoni", correct:true},
            {text: "Rohit", correct:false},
        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answers:[
            {text: "Asia", correct:false},
            {text: "Africa", correct:false},
            {text: "Artic", correct:false},
            {text: "Australia", correct:true},
        ]
    },
    {
        question:"Which is the smallest country in the world?",
        answers:[
            {text: "Nepal", correct:false},
            {text: "Vatican city", correct:true},
            {text: "Sri lanka", correct:false},
            {text: "Bhutan", correct:false},
        ]
    },
    {
        question:"Which animal is known as the 'Ship of the Desert?",
        answers:[
            {text: "Whale", correct:false},
            {text: "Desert Snake", correct:false},
            {text: "Camel", correct:true},
            {text: "Dolphin", correct:false},
        ]
    },
    {
        question:"Name the place known as the Roof of the World?",
        answers:[
            {text: "America", correct:false},
            {text: "Mexico", correct:false},
            {text: "Sri lanka", correct:false},
            {text: "Tibet", correct:true},
        ]
    },
    {
        question:"Name the largest planet of our Solar System?",
        answers:[
            {text: "Saturn", correct:false},
            {text: "Jupitar", correct:true},
            {text: "Sun", correct:false},
            {text: "Earth", correct:false},
        ]
    },
    {
        question:"Name the primary colours?",
        answers:[
            {text: "Red, Yellow, Blue", correct:true},
            {text: "Green, Blue, Violet", correct:false},
            {text: "Red, Green, Orange", correct:false},
            {text: "Black, White", correct:false},
        ]
    },
    {
        question:" How many continents are there in the world?",
        answers:[
            {text: "8", correct:false},
            {text: "9", correct:false},
            {text: "5", correct:false},
            {text: "7", correct:true},
        ]
    },
    {
        question:"How many consonants are there in the English alphabet?",
        answers:[
            {text: "20", correct:false},
            {text: "23", correct:false},
            {text: "21", correct:true},
            {text: "24", correct:false},
        ]
    }
];

const questionElement= document.getElementById("question");
const answerbuttons= document.getElementById("answer-button");
const nextbutton= document.getElementById("nxt");

let currentQuestionIndex =0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button= document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("bttn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
nextbutton.style.display="none";
while(answerbuttons.firstChild){
    answerbuttons.removeChild(answerbuttons.firstChild)
}
}

function selectAnswer(e){
    const selectButton=e.target;
    const isCorrect= selectButton.dataset.correct==="true";

    if(isCorrect){
        selectButton.classList.add("correct");
        score++;
     }
    else{
        selectButton.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextbutton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextbutton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score}
    out of ${questions.length}!`;
    nextbutton.innerHTML="Play Again";
    nextbutton.style.display="block";

}

startQuiz();