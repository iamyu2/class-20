
//sprites
var wall, bullet;
var thickness, wheight, damage;
var speed;

function setup()
{

  //canvas
  createCanvas(windowWidth, windowHeight);
  
  //thicness
  thickness = random(22, 83);
  
  //sprites
  wall = createSprite(windowWidth - 100, windowHeight/2, thickness, windowHeight/2);
  wall.shapeColor = "black";
  bullet = createSprite(50, windowHeight/2, 150, 50);
  bullet.shapeColor = "black";

}

function draw()
{

  //background
  background(200);
  if(bullet.x == 50)
  {

    text("S P R E S S   'SPACE'", 20, 20);

  }
  
  //control
  if(keyDown("down"))
  {

    speed = random(223, 331);
    speed = bullet.velocityX;
    wheight = random(30, 52);
    
  }

  //collision
  if(hascollided(bullet, wall))
  {

    bullet.velocityX = 0;
    bullet.x = ((wall.x - thickness/2) - bullet.width/2) + 1;
    damage = (0.5*wheight*speed*speed)/(thickness*thickness*thickness);

    if(damage < 10)
    {

        bullet.shapeColor = "green";

    }

    if(damage > 9)
    {

        bullet.shapeColor = "red";

    }

    text("S P R E S S   R", 20, 20);

  }

  //restart
  if(keyDown("R"))
  {

    bullet.x = 50;
    bullet.shapeColor = "black";
    damage = 0;
    thickness = random(22, 83);
    speed = 0;
    wheight = 0;
    
  }

  //draw
  drawSprites();

}

