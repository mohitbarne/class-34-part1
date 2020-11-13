class Rope {
    constructor(body,anchor)
	{		
		var options={
			bodyA:body,			 
			pointB:anchor, 
			stiffness:0.04, 
			length:300			
		}
		this.bodyA=body
		this.pointB=anchor
		this.rope=Matter.Constraint.create(options)
		World.add(world,this.rope)
	}
	
	display()
	{
		
			var pointA=this.bodyA.position;
			var pointB=this.pointB
			
			push();
			strokeWeight(2);
			stroke("Black");	
			line(pointA.x,pointA.y,pointB.x,pointB.y);
			pop();
		
	}
}