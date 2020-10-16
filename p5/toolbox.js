let brush = {
    normal: "normal"
}

// Toolbox for selecting brushes 'n shits
class Toolbox {
    constructor() {

        this.pos = createVector(width - 60, 30)
    }

    render() {
        fill(50, 220, 160, 70)
        rect(this.pos.x, this.pos.y, 50, 160)
    }


}


class Brush {
    constructor(type) {
        this.type = type
    }
}