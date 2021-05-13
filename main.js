noseX = 0;
noseY = 0;

function preload(){
moustache = loadImage('https://i.postimg.cc/0Q2b2zX5/m.png');
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);

}

function gotPoses(results){
if(results.length >0){
console.log(results);
noseX = results[0].pose.nose.x-20;
noseY = results[0].pose.nose.y+1;
console.log("nose x = " + results[0].pose.nose.x);
console.log("nose y = " + results[0].pose.nose.y);
}
}

function draw(){
image(video, 0,0,300,300);
image(moustache,noseX,noseY,60,60);
}

function modelLoaded(){
console.log("Model Is Loaded");
}

function Take_Snapshot(){
save('YourFilter.png');
}