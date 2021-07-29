var player, enemy, Lazer
var backgroundImage, enemyImage, laserImage, LazerImage, playerImage, PlayerImage
var gameState = "play"

var score = 0

function preload(){
    backgroundImage = loadImage("Background.jpg")
    enemyImage = loadImage("Enemy.jpg")
    laserImage = loadImage("Good Laser.jpg")
    LazerImage = loadImage("Bad Laser.jpg")
    playerImage = loadImage("Air Force Left.jpg")
    PlayerImage = loadImage("Air Force Right.jpg")

    enemiesGroup = new Group()
    laserGroup = new Group()
    LazerGroup = new Group()
}

function setup(){
    createCanvas(800, 400)

    player = createSprite(750, 200, 10, 10)
    player.addImage(PlayerImage)
    player.scale = 0.1

}

function draw(){
    background(backgroundImage)
    text("Score = " + score, 50, 50)

    if(gameState === "play"){

        if(enemiesGroup.isTouching(player) || player.isTouching(LazerGroup)){
            gameState = "end"
        }

        if(enemiesGroup.isTouching(laserGroup)){
            enemiesGroup.destroyEach()
            laserGroup.destroyEach()
            text("Great Job!", 400, 200)
            score = score + 1
        }

        if(keyDown(LEFT_ARROW)){
            player.addImage(playerImage)
            player.x = player.x - 5
        }

        if(keyDown(RIGHT_ARROW)){
            player.addImage(PlayerImage)
            player.x = player.x + 5
        }


        spawnEnemy()
        spawnLaser()
        spawnLazer();
    }

    if(gameState === "end"){
        text("GAME OVER", 400, 200)
    }

    drawSprites();
}

function spawnEnemy() {
    if (frameCount % 60 === 0) {
      var enemy = createSprite(600,0,40,10);
      enemy.x = Math.round(random(50,750));
      enemy.addImage(enemyImage);
      enemy.scale = 0.1;
      enemy.velocityY = (score + 5)
      
      enemy.lifetime = 400;

      enemiesGroup.add(enemy);
    }
    
  }

function spawnLaser() {
    if (keyDown(UP_ARROW)) {
      var laser = createSprite(600,0,40,10);
      laser.x = player.x;
      laser.y = player.y - 10
      laser.addImage(laserImage);
      laser.scale = 0.1;
      laser.velocityY = -8;

      laserGroup.add(laser)
    }
    
}

function spawnLazer() {
    if (frameCount % 60 === 0) {
      var Lazer = createSprite(600,0,40,10);
      Lazer.addImage(LazerImage);
      Lazer.scale = 0.1;
      Lazer.velocityY = (score + 5);

      LazerGroup.add(Lazer)
    }
    
}