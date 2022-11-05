var canvas=document.getElementById("space");
var ctx=canvas.getContext("2d");
var playerX=365;
var playerY=canvas.height-100;
var interval;
function startButtonPressed(){
    interval=setInterval(draw,20);
}
var playerWidth=70;
var enemyY=50;
var enemy2Y=150
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
var hit21=false;
var hit22=false;
var hit23=false;
var hit24=false;
var hit25=false;
var hit26=false;
var img1=new Image();
img1.src="Laser_Cannon.webp";
var img2=new Image();
img2.src="Alien.png"
// img1.onload=function(){
//     ctx.drawImage(img1,0,0,canvas.width,canvas.height);
// }
function drawPlayer(){
    if(playerX>canvas.width-60){
        playerX-=35;
    }else if(playerX<0){
        playerX+=35;
    }
    ctx.fillStyle = "black";
    ctx.fillRect(playerX, playerY, playerWidth ,playerWidth); 
    ctx.drawImage(img1,playerX,playerY,playerWidth,playerWidth); 
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
    if(bulletY>enemyY&&bulletY<enemyY+enemyWidth){
        if(bulletX>x1&&bulletX<x1+enemyWidth){
        hit1=true;
    }else if(bulletX+20<x1+enemyWidth&&bulletX+20>x1){
        hit1=true
    }
    }
    if(hit1==false){
        ctx.fillStyle = "black";
        ctx.fillRect(x1, enemyY, enemyWidth ,enemyWidth);
        ctx.drawImage(img2,x1,enemyY,enemyWidth,enemyWidth);
    }
    else{
        shooting=false;
        bulletY=playerY
    }
}
function drawEnemy2(){
    let x1=210
    // if(enemyY>playerY){
    // clearInterval(interval);
    // interval= null;}
    if(bulletY>enemyY&&bulletY<enemyY+enemyWidth){
        if(bulletX>x1&&bulletX<x1+enemyWidth){
        hit2=true;
    }else if(bulletX+20<x1+enemyWidth&&bulletX+20>x1){
        hit2=true
    }
    }
    if(hit2==false){
        ctx.fillStyle = "black";
        ctx.fillRect(x1, enemyY, enemyWidth ,enemyWidth);
        ctx.drawImage(img2,x1,enemyY,enemyWidth,enemyWidth);
    }
    else{
        shooting=false;
        bulletY=playerY
    }
}
function drawEnemy3(){
    let x1=320
    // if(enemyY>playerY){
    // clearInterval(interval);
    // interval= null;}
    if(bulletY>enemyY&&bulletY<enemyY+enemyWidth){
        if(bulletX>x1&&bulletX<x1+enemyWidth){
        hit3=true;
    }else if(bulletX+20<x1+enemyWidth&&bulletX+20>x1){
        hit3=true
    }
    }
    if(hit3==false){
        ctx.fillStyle = "black";
        ctx.fillRect(x1, enemyY, enemyWidth ,enemyWidth);
        ctx.drawImage(img2,x1,enemyY,enemyWidth,enemyWidth);
    }
    else{
        shooting=false;
        bulletY=playerY
    }
}
function drawEnemy4(){
    let x1=430
    // if(enemyY>playerY){
    // clearInterval(interval);
    // interval= null;}
    if(bulletY>enemyY&&bulletY<enemyY+enemyWidth){
        if(bulletX>x1&&bulletX<x1+enemyWidth){
        hit4=true;
    }else if(bulletX+20<x1+enemyWidth&&bulletX+20>x1){
        hit4=true;
    }
    }
    if(hit4==false){
        ctx.fillStyle = "black";
        ctx.fillRect(x1, enemyY, enemyWidth ,enemyWidth);
        ctx.drawImage(img2,x1,enemyY,enemyWidth,enemyWidth);
    }
    else{
        shooting=false;
        bulletY=playerY
    }
}
function drawEnemy5(){
    let x1=540
    // if(enemyY>playerY){
    // clearInterval(interval);
    // interval= null;}
    if(bulletY>enemyY&&bulletY<enemyY+enemyWidth){
        if(bulletX>x1&&bulletX<x1+enemyWidth){
        hit5=true;
    }else if(bulletX+20<x1+enemyWidth&&bulletX+20>x1){
        hit5=true
    }
    }
    if(hit5==false){
        ctx.fillStyle = "black";
        ctx.fillRect(x1, enemyY, enemyWidth ,enemyWidth);
        ctx.drawImage(img2,x1,enemyY,enemyWidth,enemyWidth);
    }
    else{
        shooting=false;
        bulletY=playerY
    }
}
function drawEnemy6(){
    let x1=650
    // if(enemyY>playerY){
    // clearInterval(interval);
    // interval= null;}
    if(bulletY>enemyY&&bulletY<enemyY+enemyWidth){
        if(bulletX>x1&&bulletX<x1+enemyWidth){
        hit6=true;
    }else if(bulletX+20<x1+enemyWidth&&bulletX+20>x1){
        hit6=true
    }
    }
    if(hit6==false){
        ctx.fillStyle = "black";
        ctx.fillRect(x1, enemyY, enemyWidth ,enemyWidth);
        ctx.drawImage(img2,x1,enemyY,enemyWidth,enemyWidth);
    }
    else{
        shooting=false;
        bulletY=playerY
    }
}
// druga vrsta
function drawEnemy21(){
    let x1=100
    if(bulletY>enemy2Y&&bulletY<enemy2Y+enemyWidth){
        if(bulletX>x1&&bulletX<x1+enemyWidth){
        hit21=true;
    }else if(bulletX+20<x1+enemyWidth&&bulletX+20>x1){
        hit21=true
    }
    }
    if(hit21==false){
        ctx.fillStyle = "black";
        ctx.fillRect(x1, enemy2Y, enemyWidth ,enemyWidth);
        ctx.drawImage(img2,x1,enemy2Y,enemyWidth,enemyWidth);
    }
    else{
        shooting=false;
        bulletY=playerY
    }
}
function drawEnemy22(){
    let x1=210
    if(bulletY>enemy2Y&&bulletY<enemy2Y+enemyWidth){
        if(bulletX>x1&&bulletX<x1+enemyWidth){
        hit22=true;
    }else if(bulletX+20<x1+enemyWidth&&bulletX+20>x1){
        hit22=true
    }
    }
    if(hit22==false){
        ctx.fillStyle = "black";
        ctx.fillRect(x1, enemy2Y, enemyWidth ,enemyWidth);
        ctx.drawImage(img2,x1,enemy2Y,enemyWidth,enemyWidth);
    }
    else{
        shooting=false;
        bulletY=playerY
    }
}
function drawEnemy23(){
    let x1=320
    if(bulletY>enemy2Y&&bulletY<enemy2Y+enemyWidth){
        if(bulletX>x1&&bulletX<x1+enemyWidth){
        hit23=true;
    }else if(bulletX+20<x1+enemyWidth&&bulletX+20>x1){
        hit23=true
    }
    }
    if(hit23==false){
        ctx.fillStyle = "black";
        ctx.fillRect(x1, enemy2Y, enemyWidth ,enemyWidth);
        ctx.drawImage(img2,x1,enemy2Y,enemyWidth,enemyWidth);
    }
    else{
        shooting=false;
        bulletY=playerY
    }
}
function drawEnemy24(){
    let x1=430
    if(bulletY>enemy2Y&&bulletY<enemy2Y+enemyWidth){
        if(bulletX>x1&&bulletX<x1+enemyWidth){
        hit24=true;
    }else if(bulletX+20<x1+enemyWidth&&bulletX+20>x1){
        hit24=true
    }
    }
    if(hit24==false){
        ctx.fillStyle = "black";
        ctx.fillRect(x1, enemy2Y, enemyWidth ,enemyWidth);
        ctx.drawImage(img2,x1,enemy2Y,enemyWidth,enemyWidth);
    }
    else{
        shooting=false;
        bulletY=playerY
    }
}
function drawEnemy25(){
    let x1=540
    if(bulletY>enemy2Y&&bulletY<enemy2Y+enemyWidth){
        if(bulletX>x1&&bulletX<x1+enemyWidth){
        hit25=true;
    }else if(bulletX+20<x1+enemyWidth&&bulletX+20>x1){
        hit25=true
    }
    }
    if(hit25==false){
        ctx.fillStyle = "black";
        ctx.fillRect(x1, enemy2Y, enemyWidth ,enemyWidth);
        ctx.drawImage(img2,x1,enemy2Y,enemyWidth,enemyWidth);
    }
    else{
        shooting=false;
        bulletY=playerY
    }
}
function drawEnemy26(){
    let x1=650
    if(bulletY>enemy2Y&&bulletY<enemy2Y+enemyWidth){
        if(bulletX>x1&&bulletX<x1+enemyWidth){
        hit26=true;
    }else if(bulletX+20<x1+enemyWidth&&bulletX+20>x1){
        hit26=true
    }
    }
    if(hit26==false){
        ctx.fillStyle = "black";
        ctx.fillRect(x1, enemy2Y, enemyWidth ,enemyWidth);
        ctx.drawImage(img2,x1,enemy2Y,enemyWidth,enemyWidth);
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
        bulletY-=20
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
    enemy2Y+=0.5
        if(enemyY>playerY || enemy2Y>playerY){
            alert("GAME OVER");
            clearInterval(interval);
            interval=null;
        }
    }else{
        alert("VICTORY")
        clearInterval(interval);
        interval=null;
        
    }
    if(interval!=null){
    drawPlayer();}
    if(hit1==false&&interval!=null){
    drawEnemy1();}
    if(hit2==false&&interval!=null){
    drawEnemy2();}
    if(hit3==false&&interval!=null){
    drawEnemy3();}
    if(hit4==false&&interval!=null){
    drawEnemy4();}
    if(hit5==false&&interval!=null){
    drawEnemy5();}
    if(hit6==false&&interval!=null){
    drawEnemy6();}
    //row 2
    if(hit21==false&&interval!=null){
    drawEnemy21();}
    if(hit22==false&&interval!=null){
    drawEnemy22();}
    if(hit23==false&&interval!=null){
    drawEnemy23();}
    if(hit24==false&&interval!=null){
    drawEnemy24();}
    if(hit25==false&&interval!=null){
    drawEnemy25();}
    if(hit26==false&&interval!=null){
    drawEnemy26();}
    drawBullet();
}
