var canvas=document.getElementById("space");
var ctx=canvas.getContext("2d");
var playerDefaultX=365;
var playerDefaultY=600;
var playerWidth=70;
var enemyDefaultX=360;
var enemyDefaultY=150;
function drawplayer(){
            if(playerDefaultX>canvas.width-60){
                playerDefaultX-=35;
            }else if(playerDefaultX<0){
                playerDefaultX+=35;
            }
            ctx.fillStyle = "#000000";
            ctx.fillRect(playerDefaultX, playerDefaultY, playerWidth ,playerWidth);
            ctx.stroke();
}
draw();
document.addEventListener('keydown', function(event) {
    if(event.key=="A"||event.key=="a"){
        playerDefaultX-=35;
        console.log("left arrow")
    }else if(event.key=="D"||event.key=="d"){
        playerDefaultX+=35
        console.log("right arrow")
    }
    draw();
});
function drawEnemy(){
    ctx.fillStyle = "#000000";
        ctx.fillRect(enemyDefaultX, enemyDefaultY, playerWidth ,playerWidth);
        ctx.stroke();
}
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawEnemy();
    drawplayer();
}