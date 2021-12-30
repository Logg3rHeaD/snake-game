var toggle=false;
var x;
var y;
function setup()
{
    createCanvas(800,600);
    background(220);
    x=width/2;
    y=height/2;
    rectMode(CENTER,CENTER);
}

function draw()
{
    if(toggle==true)
        {
            background(220);
            rect(x,y,50,50);
        }
    toggle=false;
}

function keyPressed()
{
    if(keyCode==UP_ARROW)
    {   toggle = true;
        y= y-10;              
    }
    if(keyCode==DOWN_ARROW)
    {   toggle = true;
        y=y+10;
    }
    if(keyCode==LEFT_ARROW)
        {
            toggle=true;
            x=x-10;
        }
    if(keyCode==RIGHT_ARROW)
        {
            toggle=true;
            x=x+10;
        }
}