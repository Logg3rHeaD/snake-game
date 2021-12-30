function setup()
{
    createCanvas(800,600);
}

function draw()
{
    background(256);
    noStroke();
    var num=10;
    var col=0;
    for(var i=0;i<=800;i=i+800/num)
        {
            fill(col);
            rect(i,0,800/num,600);
            col=col+256/(num-1);
        }
}