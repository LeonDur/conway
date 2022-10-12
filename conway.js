var x=100;
var tab=new Array(x);
var nexttab=new Array(x);
var canvas=document.getElementById("myTable");
var ctx=canvas.getContext("2d");
var w=800/x;
var timerTest;
for(var i=0;i<tab.length;i++){
    var tab2=new Array(x);
    for(var j=0; j<tab2.length;j++){
        var num=Math.round(Math.random()*4+0)
        if(num==1){
            tab2[j]=1; 
        }else {
            tab2[j]=0;
        }
    }   
    tab[i]=tab2;
}

draw();
for(var i=0;i<tab.length;i++){
    let nexttab2=new Array(x);
    for(var j=0;j<tab.length;j++){
        nexttab2[j]=0;
    }
    nexttab[i]=nexttab2;
    
}

function nextTabFill(){
    for(var i=0;i<tab.length;i++){
        for(var j=0;j<tab.length;j++){
            gameRules(i,j);
        }
    }
    tab=JSON.parse(JSON.stringify(nexttab));
}

function gameRules(i,j){
    var count=neighbour(i,j);
    if(tab[i][j]==1){
        if(count<2){
            nexttab[i][j]=0;
        }else if(count==2||count==3){
        nexttab[i][j]=1;
        }else if(count>3){
            nexttab[i][j]=0
        }
    }else if(tab[i][j]==0){
        if(count==3){
            nexttab[i][j]=1;
        }else{
            nexttab[i][j]=0;
        }
    }
}
function neighbour(i,j){
    var stevec=0;
    if(i-1>=0 && j-1>=0){
        if(tab[i-1][j-1]==1){
            stevec++;
        }
    }else if(i-1+tab.length<tab.length && j-1+tab.length<tab.length){
        if(tab[i-1+tab.length][j-1+tab.length]==1){
            stevec++;
        }
    }else if(i-1+tab.length<tab.length && j-1>=0){
        if(tab[i-1+tab.length][j-1]==1){
            stevec++;
        }
    }else if(i-1>=0 && j-1+tab.length<tab.length){
        if(tab[i-1][j-1+tab.length]==1){
            stevec++;
        }
    }

    if(j-1>=0){
        if(tab[i][j-1]==1){
            stevec++;
        }
    }else if(j-1+tab.length<tab.length){
        if(tab[i][j-1+tab.length]==1){
            stevec++;
        }
    }

    if(j-1>=0 && i+1<tab.length){
        if(tab[i+1][j-1]==1){
            stevec++;
        }
    }else if(j-1+tab.length<tab.length && i+1-tab.length>=0){
        if(tab[i+1-tab.length][j-1+tab.length]==1){
            stevec++;
        }
    }else if(j-1+tab.length<tab.length && i+1<tab.length){
        if(tab[i+1][j-1+tab.length]==1){
            stevec++;
        }
    }else if(j-1>=0 && i+1-tab.length>=0){
        if(tab[i+1-tab.length][j-1]==1){
            stevec++;
        }
    }


    if(i-1>=0){
        if(tab[i-1][j]==1){
            stevec++;
        }
    }else if(i-1+tab.length<tab.length){
        if(tab[i-1+tab.length][j]==1){
            stevec++;
        }
    }

    if(i+1<tab.length){  
        if(tab[i+1][j]==1){
            stevec++;
        }
    }else if(i+1-tab.length>=0){
        if(tab[i+1-tab.length][j]==1){
            stevec++;
        }
    }


    if(j+1<tab.length && i-1>=0){
        if(tab[i-1][j+1]==1){
            stevec++;
        }
    }else if(j+1-tab.length>=0 && i-1+tab.length<tab.length){
        if(tab[i-1+tab.length][j+1-tab.length]){
            stevec++;
        }
    }else if(j+1-tab.length>=0 && i-1>=0){
        if(tab[i-1][j+1-tab.length]){
            stevec++;
        }
    }else if(j+1<tab.length && i-1+tab.length<tab.length){
        if(tab[i-1+tab.length][j+1]){
            stevec++;
        }
    }

    if(j+1<tab.length){
        if(tab[i][j+1]==1){
            stevec++;
        }
    }else if(j+1-tab.length>=0){
        if(tab[i][j+1-tab.length]==1){
            stevec++;
        }
    }

    if(i+1<tab.length && j+1<tab.length){
        if(tab[i+1][j+1]==1){
            stevec++;
        }
    }else if(i+1-tab.length>=0 && j+1-tab.length>=0){
        if(tab[i+1-tab.length][j+1-tab.length]==1){
            stevec++;
        }
    }else if(i+1-tab.length>=0 && j+1<tab.length){
        if(tab[i+1-tab.length][j+1]==1){
            stevec++;
        }
    }else if(i+1<tab.length && j+1-tab.length>=0){
        if(tab[i+1][j+1-tab.length]==1){
            stevec++;
        }
    }


    return(stevec);
}
function draw(){
    for(let i=0;i<tab.length;i++){
        for(let j=0;j<tab.length;j++){
            let x=i*w;
            let y=j*w;
            if(tab[i][j]==0){
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(x, y, w ,w);
            ctx.stroke();
            }else if(tab[i][j]==1){
                ctx.fillStyle = "#000000";
            ctx.fillRect(x, y, w ,w);
            ctx.stroke();
            }
        }
    }
}
function startButtonPressed(){
    document.getElementById("Start").disabled = true
    timerTest=setInterval(play,100)
}
function play(){
        nextTabFill();
        draw();
}
function stopButtonPressed(){
    clearInterval(timerTest);
    timerTest= null;
    document.getElementById("Start").disabled = false;
}
function resetButtonPressed(){
    window.location.reload();
}