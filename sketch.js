
var rocket1;
var rocket2;
var rockets=[];
var  canvas;
var Asteroid;
var Rocket
var gameState = 0;
var playerCount;
var distance = 0;
var database;
var form, player, game;
var allPlayers;
function preload(){
  Asteroid= loadImage("/images/Asteroid.png");
  Rocket=loadImage("/images/Rocket.png");
}
function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
  }


  function draw(){
    if(playerCount === 2){
      game.update(1);
    }
   if(gameState === 1){
      clear();
      game.play();
   }
    //if(gameState === 2){
    //  game.end();
    //}
  }