//simple snake game
var size=10;
var xPos=[];
var yPos=[];
var direction='right';
var diff=5;
var exe=true;
var fCor=[];
var xLast=0;
var yLast=0;
var score=0;
function setup()
{
    createCanvas(800,600);
    fill(0);
    strokeWeight(10);
    for(var i=0;i<size;i++)
        {
            xPos.push(10+i*diff);
            yPos.push(10);
        }
    fCor.push(parseInt(random(10,150),10)*5);
    fCor.push(parseInt(random(10,110),10)*5);
    textAlign(CENTER,CENTER);
    frameRate(15);
}

function draw()
{
    
    if(xPos[size-1]<=0||xPos[size-1]>=800)
        exe=false;
    if(yPos[size-1]<=0||yPos[size-1]>=600)
        exe=false;
    for(var i=0;i<size-1;i++)
        {
            if(xPos[size-1]==xPos[i]&&yPos[size-1]==yPos[i])
                exe=false;
        }
    if(xPos[size-1]==fCor[0]&&yPos[size-1]==fCor[1])
        {
            xPos.unshift(xLast);
            yPos.unshift(yLast);
            size=size+1;
            score=score+1;
            fruit_generator();
        }
    
    if(exe===true){
        background(220);
    for(var i=0;i<size-1;i++)
        line(xPos[i],yPos[i],xPos[i+1],yPos[i+1]);
    point(fCor[0],fCor[1]);
    xLast=xPos[0];
    yLast=yPos[0];
    for(var i=0;i<size-1;i++)
        {
            xPos[i]=xPos[i+1];
            yPos[i]=yPos[i+1];
        }
    if(direction==='right')
        {
            xPos[size-1]=xPos[size-2]+diff;
            yPos[size-1]=yPos[size-2];
        }
    if(direction==='left')
        {
            xPos[size-1]=xPos[size-2]-diff;
            yPos[size-1]=yPos[size-2];
        }
    if(direction==='up')
        {
            xPos[size-1]=xPos[size-2];
            yPos[size-1]=yPos[size-2]-diff;
        }
    if(direction==='down')
        {
            xPos[size-1]=xPos[size-2];
            yPos[size-1]=yPos[size-2]+diff;
        }
    }
    else{
        textSize(50);
        text('Game Over',width/2,height/2);
        text('Score is:'+score,width/2,height/2+55);
    }
    
}
function keyPressed()
{
    if(keyCode===UP_ARROW)
    {
        if(direction!='down'&&direction!='up')
            direction='up';
    }
    if(keyCode===DOWN_ARROW)
    {
        if(direction!='down'&&direction!='up')
            direction='down';
    }
    if(keyCode===LEFT_ARROW)
    {
        if(direction!='left'&&direction!='right')
            direction='left';
    }
    if(keyCode===RIGHT_ARROW)
    {
        if(direction!='left'&&direction!='right')
            direction='right';
    }
    if(keyCode===ENTER)
        {
             size=10;
             xPos=[];
             yPos=[];
             direction='right';
             diff=5;
             exe=true;
             fCor=[];
             xLast=0;
             yLast=0;
             score=0;
            for(var i=0;i<size;i++)
        {
            xPos.push(10+i*diff);
            yPos.push(10);
        }
            fCor.push(parseInt(random(10,150),10)*5);
            fCor.push(parseInt(random(10,110),10)*5);
        }
}

function fruit_generator()
{
    fCor[0]=parseInt(random(10,150),10)*5;
    fCor[1]=parseInt(random(10,110),10)*5;
}
