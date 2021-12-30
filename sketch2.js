
function setup()
{
    createCanvas(800,600);
    
    //frameRate(5);
    textAlign(CENTER);
}

function draw()
{
    
    background(220);
    if(mouseIsPressed === true)
        {
            rect(mouseX,mouseY,50,60);
        }
   textSize(30); text(frameCount,width/2,height/2);
    
}