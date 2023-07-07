var objects=[
    {
        question: "Which word is similar to alert?",
        correct: "Vigilant",
        wrong: "Negligent"
      },
      {
        question: "Which word is opposite to available?",
        correct: "Inconvenient",
        wrong: "Applicable"
      },
      {
        question: "Which word better describes smooth?",
        correct: "Continuous",
        wrong: "Soft"
      },
      {
        question: "Which word is more positive?",
        correct: "Slim",
        wrong: "Skinny"
      },
      {
        question: "Which word is negative?",
        correct: "Furious",
        wrong: "Angry"
      },
      {
        question: "Which spelling is correct?",
        correct: "Batch",
        wrong: "Bach"
      },
      {
        question: "Which is more positive?",
        correct: "Delicate",
        wrong: "Fair"
      },
      {
        question: "Which word better defines programmer?",
        correct: "A computer geek",
        wrong: "A mad person"
      },
      {
        question: "Which word better describes confidence?",
        correct: "Certainity",
        wrong: "Timidity"
      },
      {
        question: "Which spelling is correct?",
        correct: "Opportunity",
        wrong: "Oppurtunity"
      },
      {
        question: "Which is the meaning to murder?",
        correct: "Bloodshed",
        wrong: "Demolish"
      },
      {
        question: "Which word better describes example?",
        correct: "Instance",
        wrong: "Pattern"
      }
];

var question=document.getElementById('question'),
    btn1=document.getElementById('btn-1'),
    btn2=document.getElementById('btn-2'),
    score=document.getElementById('score'),
    qno=document.getElementById('qno'),
    quecount = 0,
    askque = prompt("How many questions do you want? \n (1-10)" , 5)||5;
var randArr=[];
while (randArr.length < askque){
let random = Math.floor(Math.random() * 10)
   if(randArr.indexOf(random) === -1){
     randArr.push(random)}
}
function putquestion(){
  var currentQuestion = objects[randArr[quecount]];
  question.innerHTML= currentQuestion.question;
  if(Math.random() <= 0.5){
    btn1.innerHTML=currentQuestion.correct
    btn2.innerHTML=currentQuestion.wrong
  }else{
    btn1.innerHTML=currentQuestion.wrong
    btn2.innerHTML=currentQuestion.correct
  }
  qno.innerHTML= quecount+1 + "/" + askque
}
window.onload = putquestion
var scr=0;
btn1.onclick = function(){
  var currentQuestion = objects[randArr[quecount]];
  if(btn1.innerHTML== currentQuestion.correct){
    scr += 5
    score.innerHTML= "Score:" + scr
    btn1.classList.add('correct')
  }else{
    btn1.classList.add('wrong')
}
  quecount++
    setTimeout(putquestion , 1000)
    setTimeout(endgame , 1000)
    setTimeout(restorebtns , 1000)
}
btn2.onclick = function(){
  var currentQuestion = objects[randArr[quecount]];
  if(btn2.innerHTML== currentQuestion.correct){
    scr += 5
    score.innerHTML= "Score:" + scr
    btn2.classList.add('correct')
  }else{
    btn2.classList.add('wrong')
  }
  quecount++
    setTimeout(putquestion , 1000)
    setTimeout(endgame , 1000)
    setTimeout(restorebtns , 1000)
}
function endgame(){
  if(quecount == askque){
    var main_content = document.getElementById('card');
    main_content.style.opacity = '0';
    setTimeout(function(){
      main_content.innerHTML = "<center><p class='inner-scores'>Scores: "+scr+"</p></center>"
      main_content.style.opacity = '1';
    }, 1000);
  }
}
function restorebtns(){
  btn1.classList.remove('correct');
  btn1.classList.remove('wrong');
  btn2.classList.remove('correct');
  btn2.classList.remove('wrong');
}