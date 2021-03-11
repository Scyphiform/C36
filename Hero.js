class Hero {
    constructor(x, y) {
      var options = {
        'restitution':0.5,
        'friction':1,
        'density':0.8
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("images/Superhero-01.png");
      
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      fill("red");
      stroke("purple")
      strokeWeight(2)
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };
  