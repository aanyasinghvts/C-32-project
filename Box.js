class Box {
  constructor(x, y, width, height) {
    this.visibility=255;
    var options = {
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle= this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    console.log(this.body.speed);
    if(this.body.speed<3){
      this.visibility=225;
    }
    else
    {
      World.remove(this.body);
      push();
      this.visibility=this.visibility-5;
    pop();
    }
  }
    score(){
      if(this.visibility<0 && this.visibility>-105){
        score++;
      }
    }
  
}