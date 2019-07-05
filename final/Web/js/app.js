function populate()
{
    if(quiz.isEnded())
    {
        showScores();

    }else
        {
            let element = document.getElementById("question");
            element.innerHTML = quiz.getQuestionIndex().text;

            //  show choices
            const choices = quiz.getQuestionIndex().choices;
            for(var i = 0; i < choices.length; i++)
            {
                element = document.getElementById("choice" + i);
                element.innerHTML = choices[i]; 
                guess("btn" + i,choices[i]);
            }
             
            showProgress();
        }
};

function guess(id, guess)
{
        const button = document.getElementById(id);
        button.onclick = function()
                                   {
                                        quiz.guess(guess);
                                        populate();
                                   }
};

function showProgress()
{
    const currentQuestionNumber = quiz.questionIndex + 1;
    const element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};


function showScores()
{
    let gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>Sua Pontuação: " + quiz.score + "</h2>";
    const element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};

// Estancias do Obj Questions
const questions = 
    [
        new Question("Qual dessas não uma POO?", [ "Java","C#","C++","C"],"C"),
        new Question("Qual Linguagem e usada para estilizar?",["HTML","JQuery","CSS","XML"],"CSS"),
        new Question("Qual dessas não uma POO?",["Java","C#","C++","HTML"],"HTML"),
        new Question("Qual Linguagem e usada na Web?",["PHP","Python","Javascript","ALL"],"ALL"),
        new Question("MVC e uma ____?",["Language","Library","Framework","All"],"Framework")

    ];

    const quiz = new Quiz(questions);

    populate();