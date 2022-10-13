var canvasWidth=600;
var canvasHeight=400;
var player;
var playerbackround= new Image();
var playerYposition =200;
var fallspeed=0;
var interval=setInterval(updateCanvas, 20);
var isJumping=false;
var JumpSpeed=0;
var block;
var block2;
var scorecount=5;
var scoreLabel;
var delay=1000;
function startGame(){
    gameCanvas.start();
    player =new createPlayer(30,30,10);
    block =new createBlock(Math.floor(Math.random() * 10+40),
    Math.floor(Math.random() * 100+70),
    Math.floor(Math.random() * 6+4),400);
    block2 =new createBlock2(Math.floor(Math.random() * 10+40),
    Math.floor(Math.random() * 100+70),
    Math.floor(Math.random() * 6+4),300);
    //scoreLabel=new createScoreLabel(10,30);
}
var gameCanvas ={
    canvas:document.createElement("canvas"),
    start :function(){
        this.canvas.width=canvasWidth;
        this.canvas.height=canvasHeight;
        this.context=this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}
function createPlayer(width, height, x){
    this.width=width;
    this.height=height;
    this.x=x;
    this.y=playerYposition;
    this.draw=function(){
        ctx=gameCanvas.context;
        ctx.fillStyle="green";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.makefall=function(){
        this.y += fallspeed;
        fallspeed += 0.1;
        if(fallspeed>7){
            fallspeed=7;
        }
        this.stopPlayer();
        
    }
    this.stopPlayer =function(){
        var ground=canvasHeight-this.height;
        if(this.y>ground){
            this.y=ground;
        }
    }
    this.jump=function(){
        if(isJumping==true){
            this.y-=JumpSpeed;
            JumpSpeed+=5;
            if(JumpSpeed>12){
                JumpSpeed=12;
            }
        }
    }
    document.body.onkeydown = function(e) {
        if (e.key == " " ||
              e.code == "Space"      
        ) {
             isJumping=true;
        }
    }
    document.body.onkeyup = function(e) {
        if (e.key == " " ||
              e.code == "Space"      
        ) {
             isJumping=false;
        }
    }
}
function createBlock(width, height,speed,){
    this.width=width;
    this.height=height;
    this.speed=speed;
    this.x=canvasWidth;
    this.y=canvasHeight-this.height;;
    this.draw=function(){
        ctx=gameCanvas.context;
        ctx.fillStyle="red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.attackPlayer=function(){
        this.x -=speed;
        
        this.returnToAttack();
    }
    this.returnToAttack=function(){
        if(this.x<0){
            scorecount+=1;
            this.width=Math.floor(Math.random() * 10+40);
            this.height=Math.floor(Math.random() * 100+70);
            this.speed=Math.floor(Math.random() * 4+2);
            this.x=canvasWidth;
            this.y=canvasHeight-this.height;
            
        }
    }
}
function createBlock2(width, height,speed,){
    this.width=width;
    this.height=height;
    this.speed=speed;
    this.x=canvasWidth;
    this.y=canvasHeight-400;
    this.draw=function(){
        ctx=gameCanvas.context;
        ctx.fillStyle="red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.attackPlayer=function(){
        this.x -=speed;
        
        this.returnToAttack();
    }
    this.returnToAttack=function(){
        if(this.x<0){
            this.width=Math.floor(Math.random() * 10+40);
            this.height=Math.floor(Math.random() * 100+70);
            this.speed=Math.floor(Math.random() * 4+2);
            this.x=canvasWidth;
            this.y=canvasHeight-400
            
        }
    }
    this.scoreup=function(){
        if(this.x<40){
            scorecount+=1;
            createScoreLabel(10,30);console.log(scorecount)
        }
    }
}
function detectColision(){
    var playerLeft=player.x;
    var playerRight=player.x+player.width;
    var blockLeft=block.x;
    var blockRight=block.x +block.width;
    var playerBottom=player.y+player.height;
    var blockTop=block.y;
    var block2Left=block2.x;
    var block2Right=block2.x +block2.width;
    var block2bottom=block2.y+block2.height;
    if(playerRight>blockLeft&&
    playerLeft<blockLeft&&
    playerBottom>blockTop){
        window.location.stop();
    }
    if(playerRight>block2Left&&
    playerLeft<block2Left&&
    playerBottom<block2bottom){
        window.location.stop();
    }
}
function resetButtonPressed(){
    window.location.reload();
}
function updateCanvas(){
    detectColision();
    ctx=gameCanvas.context
    ctx.clearRect(0,0,canvasWidth,canvasHeight);
    player.makefall();
    player.draw();
    player.jump();
    block.draw();
    block.attackPlayer();
    block.returnToAttack();
    block2.draw();
    block2.attackPlayer();
    block2.returnToAttack();

}