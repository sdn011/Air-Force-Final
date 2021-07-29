class Player{
    constructor(x, y, width, height){
        this.width = width
        this.height = height
        this.image = loadImage("Air Force Right.jpg")
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

    }
}