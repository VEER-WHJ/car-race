var canvas, background, gameState=0;
var playerCount, form, player, game;
var database;
function setup(){
    database=firebase.database()
    createCanvas(400,400);
    game=new Game()
        game.getState()
            game.start()
}