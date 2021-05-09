//collision (line 1 to 22)
function hascollided(Lbullet, Lwall)
{

  right = Lbullet.x + Lbullet.width;
  left = Lwall.x;
  if(right >= left)
  {

    return true;

  }
  
  else
  {

    return false;

  }

}



