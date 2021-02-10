class Roof {
    constructor(x, y, width, height){
        var options= {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        noStroke();
        fill("#2e2b44");
        var pos = this.body.position;
        rect(pos.x, pos.y, this.width, this.height);
    }
}