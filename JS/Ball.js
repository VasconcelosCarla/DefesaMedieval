class BallCannon{
    constructor(x, y){
        var options = {
            isStatic : true
                
        };
        this.r = 30;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("../assets/bala.png")
        World.add()
    }

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        this.image(this.image, pos.x, pos.y, this.r, this.r)
    }
}