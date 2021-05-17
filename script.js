// 'use strict';
  /*console.log(document.querySelector('.message').textContent);
  document.querySelector('.message').textContent='correct Number!';
  document.querySelector('.number').textContent='@';
  document.querySelector('.score').textContent=10;
  // console.log(document.querySelector('.guess').value=28;*/
  // document.querySelector('.again').textContent='Again!';
  
let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
const displaymessage=function(message){
  document.querySelector('.message').textContent=message;
}
// change color 
document.querySelector('.change').addEventListener('click',function(){
  document.querySelector('body').style.backgroundColor='#13BEF5 ';  
})
// hint
document.querySelector('.More').addEventListener('click',function(){
  displaymessage('nothing ');
});

  // making click checkbox work here>>>>>>>>>
  document.querySelector('.check').addEventListener
  ('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);
    
    // when there is no input>>>>>>>>>
    if(!guess){
        // document.querySelector('.message').textContent='Insert a value😪'
    displaymessage('Insert a Value😪')
        // when player wins>>>>>>>>>>>>  
      }else if(guess===secretNumber){
      // document.querySelector('.message').textContent='Hits The Bulls Eye🥳'
      displaymessage('you are correct')
      document.querySelector('body').style.backgroundColor='#5b83c2';
      document.querySelector('.number').style.width='30rem';
      document.querySelector('.number').textContent=secretNumber;
       if(score>highscore){
         highscore=score;
  document.querySelector('.highscore').textContent=highscore;
};
     
  // when gusess is different>>>>>>>>>  
       }else if(guess!==secretNumber){
        if(score>1){  
          // document.querySelector('.message').textContent=
        // guess>secretNumber?'Too high!':'too low!';
        displaymessage(guess>secretNumber?'Its too high 📈!':'Its stoo low 📉!')  
        score--;
        document.querySelector('.score').textContent=score;
          }else{
              // document.querySelector('.message').textContent='You lost the game🥱'
              displaymessage('oops! you lost 🥱')
              document.querySelector('.score').textContent=0;}
                }
// making click again work here>>>>>>>
document.querySelector('.again').addEventListener
('click',function(){
  score=20;
  document.querySelector('.guess').value=null;
  // document.querySelector('.message').textContent='start guessing...';
  displaymessage('start guessing😚...')
  document.querySelector('body').style.backgroundColor='#222';
  document.querySelector('.score').textContent=score;
   secretNumber=Math.trunc(Math.random()*20)+1;
  document.querySelector('.number').style.width='15rem';
  document.querySelector('.number').textContent='?';
});       
  if(guess<1){
    displaymessage('Plzz choose value between 1 to 20');
  }

      // when guess is to high >>>>>>>>>>>>>>
    // }else if(guess>secretNumber){
    //     if(score>1){
    //     document.querySelector('.message').textContent='Too high!'
    //   score--;
    //   document.querySelector('.score').textContent=score;
    //     }else{
    //         document.querySelector('.message').textContent='You lost the game🥱'
    //         document.querySelector('.score').textContent=0;
    //    } 
       
    //    //  when guess is to low>>>>>>>>>>>>>>>
    //    }else if(guess<secretNumber){
    //     if(score>1){
    //     document.querySelector('.message').textContent='Too low!'
    //   score--;
    //   document.querySelector('.score').textContent=score;
    //   }else{
    //     document.querySelector('.message').textContent='You lost the game🥱'
    //     document.querySelector('.score').textContent=0;
    //   }}
    });
  