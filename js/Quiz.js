class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
      let question = createquestion('this is a question')
      question.hide();

    //write code to change the background color here
      backgroundImage("yellow");

    //write code to show a heading for showing the result of Quiz

    this.title.html("Result Of QuizGame");
    this.title.position(350, 0);


    //call getContestantInfo( ) here
    call(consent.js);

    if(allContestants !== undefined){
      fill ("blue");
      textSize(20);
      text("*NOTE: contestant who answered correct arehighlited in green color!" ,130,230);
    }


    for(var plr in allContestants){
      var correctAns = "2";
      if (correctAns === allcontestants[plr].answer)
      fill("green")
      else
      fill("red");
    }

    //write condition to check if contestantInfor is not undefined
      
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
