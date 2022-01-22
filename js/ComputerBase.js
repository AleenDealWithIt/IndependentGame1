class ComputerBase {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("assets/WarTower2-1.png", "assets/WarTower2-2.png", "assets/WarTower2-3.png", "assets/WarTower2-4.png",
                             "assets/WarTower2-5.png", "assets/WarTower2-6.png", "assets/WarTower2-7.png", "assets/WarTower2-8.png",
                             "assets/WarTower2-9.png");
  
      World.add(world, this.body);
    }
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
  
      pop();
    }
  }
  