class Rope{
  constructor(bodyA,pointB){
      var options={
          bodyA:bodyA,
          pointB:pointB,
          length:150,
          stiffness:0.1
      }
      this.chain=Matter.Constraint.create(options)
World.add(world,this.chain)  
this.pointB=pointB
    }  
    display(){
     strokeWeight(5)   
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y
            ,this.pointB.x,this.pointB.y)
        
    }

}