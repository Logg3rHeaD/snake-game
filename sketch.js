function setup()
{
    createCanvas(800,600);
    background(220,220,220)
    console.log('Hello');
}

function draw()
{
    var diff = 80;
    var size = 300;
    fill(51,51,51);
    stroke(75);
    strokeWeight(2);
    ellipse(400,200,size,size);
    
    stroke(0);
    fill(255,53,139);
    ellipse(400,200,size-diff,size-diff);
    
    fill(1,176,240);
    ellipse(400,200,size-2*diff,size-2*diff);
    
    fill(174,238,0);
    ellipse(400,200,size-3*diff,size-3*diff);
}

