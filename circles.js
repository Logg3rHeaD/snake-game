function setup()
{
    createCanvas(800,600);
    background(220);
}

function draw()
{
    fill(134,37,26);
    noStroke();
    for(var i=10;i<=790;i=i+20)
        {
            for(var j=0;j<=600;j=j+20)
                {
                    ellipse(i,j,20,20);
                }
        }
}