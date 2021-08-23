function preload()
{

}

function setup()
{
    canvas = createCanvas(325, 275);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(325, 275);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 325, 275)
}