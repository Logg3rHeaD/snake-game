var count =0;

function setup()
{
    createCanvas(800,600);
    
}

function draw()
{
    background(220);
    var x1=-50+count;
    var x2=-50+2*count;
    var x3=-50+3*count;
    var x4=-50+4*count;
    var x5=-50+5*count;
    noStroke();
    fill(1,173,241);
    //rect1
    if(x1>760){
        rect(760,0,40,20);
    }
    else
    {rect(x1,0,40,20);}
    
    //rect2
    if(x2>760){
        rect(760,100,40,40);
    }
    else
    {rect(x2,100,40,40);}
    
    //rect3
    if(x3>770){
        rect(770,200,30,50);
    }
    else
    {rect(x3,200,30,50);}
    
    //rect4
    if(x4>750){
        rect(750,300,50,50);
    }
    else
    {rect(x4,300,50,50);}
    
    //rect5
    if(x5>790){
        rect(790,400,10,10);
    }
    else
    {rect(x5,400,10,10);}
    count=count+1;
}