class Rope {
	constructor(body1,body2, offsetX, offsetY) {
		this.offsetX = offsetX;
		this.offsetY = offsetY;

		var options = {
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
		
		this.rope = Constraint.create(options)
		World.add(world,this.rope)
	}
	display() {
		var PA = this.rope.bodyA.position;
		var PB =this.rope.bodyB.position;

		var Anchor1X = PA.x;
		var Anchor1Y = PA.y;

		var Anchor2X = PB.x + this.offsetX;
		var Anchor2Y = PB.y + this.offsetY;

		strokeWeight(2);
		stroke(255);
		line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
	}
}