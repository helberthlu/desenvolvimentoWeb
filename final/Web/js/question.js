// Crianção Obj Question
function Question(text, choices, answer) 
{
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}

//  Prototipando funçao de correção
Question.prototype.correctAnswer =  function(choice)
{
    return choice === this.answer;  
}