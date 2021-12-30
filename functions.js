function setup()
{
    createCanvas(800,700);
    background(220);
}

function draw()
{
    grid(10,30,20);
}

function grid(numX,numY,size)
{
    for(var i=0;i<=(numX*(size-1));i=i+size)
        {
            for(var j=0;j<=(numY*(size-1));j=j+size)
                rect(i,j,size,size);
        } 
}