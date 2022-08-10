video = "";

function setup() {
    canvas = createCanvas(680,400);
    canvas.center();
    canvas.position(500,290);
}

function preload() {
    video = createVideo('video.mp4');
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("Status").innerHTML = "Status : Obejcts Detecting";
}

function modelLoaded() {
    console.log("Model Loaded!");
    Status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function draw() {
    image(video, 0, 0, 680, 400);
}