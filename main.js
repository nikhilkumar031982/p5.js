




function setup(){
   
    canvas=createCanvas(500,450);
  canvas.center();

  

    video=createCapture(VIDEO);
    video.size(320,320);
    video.hide();



    
}



function draw(){
image(video,80,70,330,330);

    stroke(255,0,0,);
    fill(255,0,0);
    circle(40,40,50);

    stroke(255,0,0,);
    fill(0,255,0);
    rect(70,26,350,30);
    
    stroke(255,0,0,);
    fill(255,0,0);
    circle(450,40,50);

    stroke(255,0,0,);
    fill(0,255,0);
    rect(40,70,30,304);



    stroke(255,0,0,);
    fill(0,255,0);
    rect(430,70,30,304);



    stroke(255,0,0,);
    fill(255,0,0);
    circle(40,385,50);

    stroke(255,0,0,);
    fill(0,255,0);
    rect(70,376,350,30);
    
    stroke(255,0,0,);
    fill(255,0,0);
    circle(450,385,50);
}

function take_snapshot(){
  save("my_picture.png")
}