class Game{
constructor(){



}
asteroidRand(){
  if(World.frameCount%40==0){
    var asteroid=createSprite(0,randomNumber(0,displayHeight),50,50);
    
    asteroid.addImage(Asteroid);
    asteroid.velocityX=3;
    asteroid.lifetime=100;
    
   }
   }
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
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      rocket1=createSprite(displayWidth/2+100,displayHeight-50,50,50);
      rocket1.addImage(Rocket);

      rocket2=createSprite(displayWidth/2-100,displayHeight-50,50,50);
      rocket2.addImage(Rocket);
      rocket1.scale=.2;
rocket2.scale=.2;
rockets=[rocket1,rocket2];
    }


  }
play(){
    form.hide();

    Player.getPlayerInfo();

    if(keyIsDown(UP_ARROW)){
        player.distance +=10
        player.update();
      }


      if(allPlayers !== undefined){
        background(rgb(0,0,0));


        
        if(frameCount%30==0){
          var asteroid=createSprite(0,random(0,displayHeight-200),50,50);
          
          asteroid.addImage(Asteroid);
          asteroid.velocityX=5;
          asteroid.lifetime=displayWidth/5;
          asteroid.scale= .1
          
         }
      }

//index of the array
var index = 0;

//x and y position of the cars
var x = 175 ;
var y;

for(var plr in allPlayers){
  //add 1 to the index for every loop
  index = index + 1 ;

  //position the cars a little away from each other in x direction
  x = x + 200;
  //use data form the database to display the cars in y direction
  y = displayHeight - allPlayers[plr].distance;
  rockets[index-1].x = x;
  rockets[index-1].y = y;

}






drawSprites()


}
}