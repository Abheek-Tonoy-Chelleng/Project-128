Star_boy_song="";
Harry_potter_theme_song="";
rightWrist_x = 0;
rightWrist_y = 0;
leftWrist_x = 0;
leftWrist_y = 0;


function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function preload(){
    Star_boy_song = loadSound("music2.mp3");
    Harry_potter_theme_song = loadSound("music.mp3");
}

function draw(){
    image(video,0,0,600,530);
}
function modelLoaded()
{
    console.log("poseNet is Initialized");
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist_x;
        leftWrist_y = results[0].pose.leftWrist_y;
        console.log("leftWrist_x ="+leftWrist_x+"leftWrist_y ="+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist_x;
        rightWrist_y = results[0].pose.rightWrist_y;
        console.log("rightWrist_x ="+rightWrist_x+"rightWrist_y ="+rightWrist_y)
    }
}