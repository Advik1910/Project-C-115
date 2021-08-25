function preload(){

}

function setup(){
    canvas = createCanvas(400 , 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400 , 400);
    video.hide();

    poseNet = ml5.poseNet(video , modeloaded);
    poseNet.poseNet('Pose' , gotposes);
}

function modeloaded(){
    console.log("PoseNet is online");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].poseNet.console.x);
        console.log("nose y = "+ results[0].poseNet.console.y);
    }
}

function draw(){
    image(video , 0 , 0 , 300 , 300);
}

function snappy(){
    save("mymustache.png");
}