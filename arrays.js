var c=[];
var count=0;
function setup()
{
    createCanvas(800,600);
    textAlign(CENTER);
}

function draw()
{
    background(220);
    fill(146,79,234);
    textSize(34);
    countdown(10,'START');
}

function countdown(num,msg)
{
    for(var i=num;i>=0;i=i-1)
        {
            c.push(i);
        }
    if(frameCount%60==0)
        count=count+1;
    if(count<=10)
        text(c[count],width/2,height/2);
    else
        text(msg,width/2,height/2);
}