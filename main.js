var pic;
var stat=""
var objects=[]
var alarma
function preload(){
    alarma=loadSound("music.mp3")
}
function setup(){
    canvas=createCanvas(380, 280);
    canvas.center()
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: "
    video=createCapture(VIDEO);
}
 function modelLoaded(){
     console.log("modelloaded")
     stat="true"
     gotResult()
 }

 function gotResult(error, results){
     if(error){
         console.log(error);
         alert("Hey there! Sorry about that! Ira Wheera Industries is experiencing a few tech issues. Don't worry, though! Our tech team is hot on the job. Please try again in a few minutes, please. Thanks so much, from Ira Wheera Industries.")
     }
     else{
         console.log(results);
        objects=results;
        
     }
 }
function draw(){
    image(video, 0, 0, 380, 280);

    if(stat != ""){
     objectDetector.detect(video, gotResult);
         for(i=0; i<objects.length; i++){
             if(objects[i]=="person"){
        document.getElementById("status").innerHTML ="Status: Objects Detected";
        fill("deeppink");
        noFill();
        stroke("deepink");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
             }
             else{
                 alarma.play()
             }
          }

    }
}