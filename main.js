canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var background_imgTag="";
var rover_x=0;
var rover_y=0;
var rover_height=90;
var rover_width=100;
var rover_imgTag="";
var rover2_x=0;
var rover2_y=150;
var rover_height2=90;
var rover_width2=100;
var rover_imgTag2="";
var background_image="racing.jpg";
var rover_image="car1.png";
var rover_image2="rover.png";
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    console.log(background_imgTag);
    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;
    console.log(rover_imgTag);
    rover_imgTag2=new Image();
    rover_imgTag2.onload=uploadrover2;
    rover_imgTag2.src=rover_image;
    console.log(rover_imgTag2);
}
function uploadBackground(){
    console.log("hi");
    ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);
}
function uploadrover(){
    console.log("roverbg");
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width, rover_height);
}
function uploadrover2(){
    console.log("roverbg1");
    ctx.drawImage(rover_imgTag2,rover2_x,rover2_y,rover_width2, rover_height2);

 }

window.addEventListener("keydown",my_keydown2);//the event should be in small
function my_keydown2(e){
    console.log("entered keydown");
    keyPressed=e.keyCode// in e keyCode  first letter is small and code C is capital .You wrote K also as capital yes
    console.log(keyPressed);
    if(keyPressed=='38'){
        up();
    }
    if(keyPressed=='40'){
        down();
    }
    if(keyPressed=='39'){
        right();
    }
    if(keyPressed=='37'){
        left();
    }
    if(keyPressed=='87'){
        up2();
    }
    if(keyPressed=='83'){
        down2();
    }
    if(keyPressed=='65'){
        left2();
    }
    if(keyPressed=='68'){
        right2();
    }
    
}
function up(){
    console.log("main up");
    if(rover_y>=0){
        rover_y-=10;
        console.log("up called");
        uploadBackground();
        uploadrover();   
        uploadrover2();  
    }
}
function down(){
    console.log("down")
    if(rover_y<=550){
        rover_y+=10;
        uploadBackground();
        uploadrover(); 
        uploadrover2();     
    }
}
function left(){
    console.log("left")
    if(rover_x>=0){
        rover_x-=10;
        uploadBackground();
        uploadrover();  
        uploadrover2();    
    }
}
function right(){
    console.log("right");
    if(rover_x<=750){
        rover_x+=10;
        uploadBackground();
        uploadrover(); 
        uploadrover2();     
    }
}
function up2(){
    console.log("main up2");
    if(rover2_y>=0){
        rover2_y-=10;
        console.log("up called1");
        uploadBackground();
        uploadrover2();    
        uploadrover(); 
    }
}
function down2(){
    console.log("down1")
    if(rover2_y<=550){
        rover2_y+=10;
        uploadBackground();
        uploadrover2(); 
        uploadrover();    
    }
}
function left2(){
    console.log("left1")
    if(rover2_x>=0){
        rover2_x-=10;
        uploadBackground();
        uploadrover2();  
        uploadrover();   
    }
}
function right2(){
    console.log("right1");
    if(rover2_x<=750){
        rover2_x+=10;
        uploadBackground();
        uploadrover2(); 
        uploadrover();    
    }
}


