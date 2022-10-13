var canvas=document.getElementById("space");
var ctx=canvas.getContext("2d");
var playerX=365;
var playerY=700;
var interval=setInterval(draw,20)
var playerWidth=70;
var enemyY=50;
var enemyWidth=50
var shooting=false;
var bulletY=playerY
var bulletX=0;
var hit1=false;
var hit2=false;
var hit3=false;
var hit4=false;
var hit5=false;
var hit6=false;
function drawPlayer(){
    if(playerX>canvas.width-60){
        playerX-=35;
    }else if(playerX<0){
        playerX+=35;
    }
    ctx.fillStyle = "grey";
    ctx.fillRect(playerX, playerY, playerWidth ,playerWidth);  
}
document.addEventListener('keydown', function(event) {
    if(interval!=null){
    if(event.key=="A"||event.key=="a"){
        playerX-=35;
    }else if(event.key=="D"||event.key=="d"){
        playerX+=35
    }
    drawPlayer();
    if(event.key=="w"|| event.key=="W"){
        bulletX=playerX+25;
        shooting=true;
    }
    }
});
function drawEnemy1(){
    let x1=100
    if(enemyY>playerY){
    clearInterval(interval);
    interval= null;}
    if(bulletY>enemyY&&bulletY<enemyY+enemyWidth){
        if(bulletX>x1&&bulletX<x1+enemyWidth){
        hit1=true;
    }else if(bulletX+20<x1+enemyWidth&&bulletX+20>x1){
        hit1=true
    }
    }
    if(hit1==false){
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(x1, enemyY, enemyWidth ,enemyWidth);
    }
    else{
        shooting=false;
        bulletY=playerY
    }
}
function drawEnemy2(){
    let x1=210
    if(enemyY>playerY){
    clearInterval(interval);
    interval= null;}
    if(bulletY>enemyY&&bulletY<enemyY+enemyWidth){
        if(bulletX>x1&&bulletX<x1+enemyWidth){
        hit2=true;
    }else if(bulletX+20<x1+enemyWidth&&bulletX+20>x1){
        hit2=true
    }
    }
    if(hit2==false){
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(x1, enemyY, enemyWidth ,enemyWidth);
    }
    else{
        shooting=false;
        bulletY=playerY
    }
}
function drawEnemy3(){
    let x1=320
    if(enemyY>playerY){
    clearInterval(interval);
    interval= null;}
    if(bulletY>enemyY&&bulletY<enemyY+enemyWidth){
        if(bulletX>x1&&bulletX<x1+enemyWidth){
        hit3=true;
    }else if(bulletX+20<x1+enemyWidth&&bulletX+20>x1){
        hit3=true
    }
    }
    if(hit3==false){
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(x1, enemyY, enemyWidth ,enemyWidth);
    }
    else{
        shooting=false;
        bulletY=playerY
    }
}
function drawEnemy4(){
    let x1=430
    if(enemyY>playerY){
    clearInterval(interval);
    interval= null;}
    if(bulletY>enemyY&&bulletY<enemyY+enemyWidth){
        if(bulletX>x1&&bulletX<x1+enemyWidth){
        hit4=true;
    }else if(bulletX+20<x1+enemyWidth&&bulletX+20>x1){
        hit4=true
    }
    }
    if(hit4==false){
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(x1, enemyY, enemyWidth ,enemyWidth);
    }
    else{
        shooting=false;
        bulletY=playerY
    }
}
function drawEnemy5(){
    let x1=540
    if(enemyY>playerY){
    clearInterval(interval);
    interval= null;}
    if(bulletY>enemyY&&bulletY<enemyY+enemyWidth){
        if(bulletX>x1&&bulletX<x1+enemyWidth){
        hit5=true;
    }else if(bulletX+20<x1+enemyWidth&&bulletX+20>x1){
        hit5=true
    }
    }
    if(hit5==false){
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(x1, enemyY, enemyWidth ,enemyWidth);
    }
    else{
        shooting=false;
        bulletY=playerY
    }
}
function drawEnemy6(){
    let x1=650
    if(enemyY>playerY){
    clearInterval(interval);
    interval= null;}
    if(bulletY>enemyY&&bulletY<enemyY+enemyWidth){
        if(bulletX>x1&&bulletX<x1+enemyWidth){
        hit6=true;
    }else if(bulletX+20<x1+enemyWidth&&bulletX+20>x1){
        hit6=true
    }
    }
    if(hit6==false){
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(x1, enemyY, enemyWidth ,enemyWidth);
    }
    else{
        shooting=false;
        bulletY=playerY
    }
}
function drawBullet(){
    if(shooting==true){
        ctx.fillStyle="grey"
        ctx.fillRect(bulletX,bulletY,20,35)
        bulletY-=10
    }
    if(bulletY<0){
        shooting=false;
        bulletY=playerY
    }
}
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(hit1==false||hit2==false||hit3==false
    ||hit4==false||hit5==false||hit6==false){
    enemyY+=0.5
    }else{
        clearInterval(interval);
        interval=null;
    }
    drawPlayer();
    if(hit1==false){
    drawEnemy1();}
    if(hit2==false){
    drawEnemy2();}
    if(hit3==false){
    drawEnemy3();}
    if(hit4==false){
    drawEnemy4();}
    if(hit5==false){
    drawEnemy5();}
    if(hit6==false){
    drawEnemy6();}
    drawBullet();
}