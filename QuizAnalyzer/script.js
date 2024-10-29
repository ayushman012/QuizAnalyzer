// 

const questions = [
    { question: "What is the highest individual score by an Indian cricketer in Test cricket?", options: ["Sachin Tendulkar", "Rahul Dravid", "Virender Sehwag", "Virat Kohli"], correct: 2 },
    { question: "Who holds the record for the most sixes in international cricket for India?", options: ["MS Dhoni", "Yuvraj Singh", "Rohit Sharma", "Virat Kohli"], correct: 0 },
    { question: "Which Indian cricketer is known as 'Captain Cool' for his calm demeanor on the field?", options: ["Sachin Tendulkar", "Rahul Dravid", "MS Dhoni", "Virat Kohli"], correct: 2 },
    { question: "Who has the highest batting average in T20 internationals among Indian cricketers?", options: ["Rohit Sharma", "Virat Kohli", "MS Dhoni", "Yuvraj Singh"], correct: 1 },
    { question: "Which Indian cricketer has scored the most centuries in One Day Internationals (ODIs)?", options: ["Sachin Tendulkar", "Rohit Sharma", "MS Dhoni", "Virat Kohli"], correct: 3 },
    { question: "In which year did MS Dhoni make his international debut for India?", options: ["2002", "2004", "2005", "2006"], correct: 2 },
    { question: "Who is the only Indian cricketer to score a century in a T20 World Cup final?", options: ["Yuvraj Singh", "Virat Kohli", "MS Dhoni", "Gautam Gambhir"], correct: 3 },
    { question: "Which Indian cricketer has the most runs in IPL history?", options: ["MS Dhoni", "Virat Kohli", "Rohit Sharma", "Suresh Raina"], correct: 1 },
    { question: "Who holds the record for the fastest century by an Indian cricketer in ODIs?", options: ["Sachin Tendulkar", "Virender Sehwag", "MS Dhoni", "Virat Kohli"], correct: 1 },
    { question: "Which Indian cricketer has the most dismissals as a wicketkeeper in T20 internationals?", options: ["MS Dhoni", "Dinesh Karthik", "Rishabh Pant", "Wriddhiman Saha"], correct: 0 }
    // Add more questions as needed
];


let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    const questionElem = document.getElementById('question');
    const optionsElems = document.querySelectorAll('.option');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('result-container');
    const resultElem = document.getElementById('user-score'); // Corrected to match ID in HTML

    function loadQuestion() {
        if (currentQuestionIndex >= 0 && currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            questionElem.textContent = currentQuestion.question;
            optionsElems.forEach((optionElem, index) => {
                optionElem.textContent = currentQuestion.options[index];
                optionElem.classList.remove('correct', 'incorrect');
                optionElem.style.backgroundColor = '#e0e0e0';
                optionElem.style.border = '1px solid #ccc';
            });
        }

        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.disabled = currentQuestionIndex === questions.length - 1;
        submitBtn.style.display = currentQuestionIndex === questions.length - 1 ? 'block' : 'none';
    }

    function showResult() {
        resultContainer.classList.remove('hidden');
        document.getElementById('quiz-container').style.display = 'none';
        console.log("Score:", score); // Check the score value in console
        const userScoreElement = document.getElementById('user-score');
        console.log("User Score Element:", userScoreElement); // Check if userScoreElement is correctly identified
        if (userScoreElement) {
            userScoreElement.textContent = `${score}/${questions.length}`;
        } else {
            console.error("user-score element not found");
        }
    }

    optionsElems.forEach((optionElem, index) => {
        optionElem.addEventListener('click', () => {
            if (index === questions[currentQuestionIndex].correct) {
                optionElem.classList.add('correct');
                optionElem.style.backgroundColor = '#c8e6c9';
                alert("Right answer");
                score++;
                console.log("Score incremented to:", score); // Log the score after incrementation
            } else {
                optionElem.classList.add('incorrect');
                optionElem.style.backgroundColor = '#ffccbc';
                alert("Wrong answer");
            }
            setTimeout(() => {
                if (currentQuestionIndex < questions.length - 1) {
                    currentQuestionIndex++;
                    loadQuestion();
                } else {
                    submitBtn.style.display = 'block';
                }
            }, 1000);
        });
    });

    prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        }
    });

    submitBtn.addEventListener('click', showResult);

    loadQuestion();
});
