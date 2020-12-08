var xPos = 49;
var yPos = 38;
var h,i;
h=191;
i=349;
var a,b;
a=193;
b=368;

var sketchProc = function(processingInstance){
    with(processingInstance){
        size(500,500);
        frameRate(65);
        draw =function(){
        background(0, 102, 255);
        fill(255, 153, 0);
        ellipse(xPos++, yPos++,45,45);
        noStroke();
        fill(168, 166, 166);
        ellipse(h--,i--,43,26);
        fill(153, 145, 145);
        ellipse(a--,b--,97,27);
    
        fill(242, 250, 0);
        ellipse(200,150,10,10);
        ellipse(162,176,10,10);
        ellipse(60,109,10,10);
        ellipse(294,107,10,10);
        ellipse(241,77,10,10);
        ellipse(173,42,10,10);
        ellipse(161,92,10,10);
        ellipse(381,31,10,10);
        ellipse(317,40,10,10);
        ellipse(82,34,10,10);
    }
    }
};
var canvas = document.getElementById("mycanvas");
var processing = new Processing(canvas, sketchProc);
