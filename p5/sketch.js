let toolbox;

function setup() {
    createCanvas(windowWidth - 15, windowHeight - 20)
    toolbox = new Toolbox()
}

function draw() {
    background(190)
    toolbox.render()
}