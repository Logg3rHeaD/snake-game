var guessGame;
var inst=null;
var right=0;
var count=0;
var flag=0;
function setup()
{
    createCanvas(800,600);
    textAlign(CENTER,CENTER);
    background(220);
}

function draw()
{
   if(count==11)
       {
           flag=1;
           textSize(35);
           background(220);
           text('GAME ENDED',width/2,height/2-40);
           text('Score is',width/2,height/2);
           text(right,width/2,height/2+40);
       }
    if(flag==0){
   fill(176,3,89);  
    if(frameCount==1||frameCount%120==0){
       inst = new guessGame(width/2,height/2);
       background(220);
        inst.generate();
       count=count+1;
        //console.log('data'+count);
    }
    }
}

guessGame = function(x,y){
    this.x=x;
    this.y=y;
    this.val;
    this.generate=function(){
        textSize(45);
        this.val=String(parseInt(random(10),10));
       text(this.val,this.x,this.y);
    }
}
function keyPressed(){
    if(key===inst.val)
        {
            right=right+1;
            //console.log('right');
        }
    else{
        //console.log('wrong');
    }
    inst=null;
    if(keyCode==ENTER)
        {
            flag=0;
            count=0;
            right=0;
        }
}