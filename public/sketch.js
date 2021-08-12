/* global createCanvas, colorMode, random, HSB, width, height, background, ellipse, mouseX, mouseY, text, 
fill, rect, keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize, collideRectCircle, noStroke,
HSL, windowWidth, windowHeight, int, key, strokeWeight, collideRectRect, keyIsDown, stroke, textFont, image, loadImage, tint, checkCollison */



//Remixed copy of working carpal



// Do not use the "map"
var socket;
let resetBool;
let randomColor;
let gamestate1;
let gamestate2;
let rectX;
let rectY;
let rectX2;
let rectY2;
let time2;
//logos
let googleLogo;
let microsoftLogo;
let amazonLogo;
let appleLogo;

let rectangleLoadingPosition;
let googleAttack;
let windmillMap;
let rubbleMap;
let castleMap;
let hillsMap;
let red;
let microsoftAttack;
let microsoftAttackBreak;
let screenBackground, logo;
let characterSelection;
let box1, box2, box3, box4;
let amazonAttack;
let yellow;
let brokenPackage;
let box1S, box2S, box3S, box4S;
let appleAttack;
let selectionBackground;
let startBoxX, startBoxY;
let continueBoxX, continueBoxY;
let mapXCol1, mapXCol2;
let mapYRow1, mapYRow2;
let mapDimX, mapDimY;
let google;
let mbox1, mbox2, mbox3, mbox4;
let mbox1S, mbox2S, mbox3S, mbox4S;
let player1Background,
  player2Background,
  plainBackground,
  player1BackgroundS,
  player2BackgroundS;
let waitingBackground;
let character1, character2;
let googleChar;
let microsoftChar;
let amazonChar;
let appleChar;
let playerOne;
let char1;
let char2;
let firstSender;
let switch1;
let plainBackgroundS;
let attackTime;
let char2X, char2Y;
let mySound;

function preload() {
  screenBackground = loadImage(
    "https://cdn.glitch.com/4e0440bd-1118-45e1-a2d0-7686827e756a%2Fsuper_smash_bros__for_wii_u_unlock_screen_template_by_highpoweredart_d9j0p99-pre.jpeg?v=1627949686741"
  );

  selectionBackground = loadImage(
    "https://cdn.glitch.com/078a7365-d586-46d4-b1c5-3f11bf028f57%2FScreenshot%202021-08-02%20224030%20(1)%20(1).jpg?v=1628209871265"
  );

  waitingBackground = loadImage(
    "https://cdn.glitch.com/078a7365-d586-46d4-b1c5-3f11bf028f57%2FScreenshot%202021-08-02%20224030%20(1).jpg?v=1628209579011"
  );

  logo = loadImage(
    "https://cdn.glitch.com/b1beeba9-5f6d-437c-8c10-b464c4eec87a%2Fwordart%20(1).png?v=1628005768679"
  );

  googleLogo = loadImage(
    "https://cdn.glitch.com/4e0440bd-1118-45e1-a2d0-7686827e756a%2FgoogleLogo.png?v=1627947707476"
  );
  microsoftLogo = loadImage(
    "https://cdn.glitch.com/4e0440bd-1118-45e1-a2d0-7686827e756a%2FmicrosoftWindows.png?v=1627947709758"
  );
  amazonLogo = loadImage(
    "https://cdn.glitch.com/4e0440bd-1118-45e1-a2d0-7686827e756a%2FAmazon-Logo-Transparent-PNG.png?v=1627945680063"
  );
  appleLogo = loadImage(
    "https://cdn.glitch.com/4e0440bd-1118-45e1-a2d0-7686827e756a%2FappleLogo.png?v=1627947702125"
  );
  // googleAttack = loadImage(
  //   "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0ab0292f-e2fa-4b37-a5d3-96e2b4eba5cd/d1d1ixf-226f972a-75f7-4c74-a062-331b356dc032.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBhYjAyOTJmLWUyZmEtNGIzNy1hNWQzLTk2ZTJiNGViYTVjZFwvZDFkMWl4Zi0yMjZmOTcyYS03NWY3LTRjNzQtYTA2Mi0zMzFiMzU2ZGMwMzIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I1lAy-h8fhl_xRESKMyRXd9Qcip56axxJJpwv1b_nP0"
  // );
  windmillMap = loadImage(
    "https://cdn.glitch.com/4e0440bd-1118-45e1-a2d0-7686827e756a%2Fdrawing-nature-green-illustration-wallpaper.jpg?v=1627945259436"
  );
  rubbleMap = loadImage(
    "https://cdn.glitch.com/4e0440bd-1118-45e1-a2d0-7686827e756a%2Fdepositphotos_325130810-stock-illustration-cartoon-ruins-of-crooked-ruined.jpg?v=1627945254666"
  );
  castleMap = loadImage(
    "https://cdn.glitch.com/4e0440bd-1118-45e1-a2d0-7686827e756a%2FPanor%C3%A1mica_Oto%C3%B1o_Alc%C3%A1zar_de_Segovia.jpg?v=1627945249285"
  );
  hillsMap = loadImage(
    "https://cdn.glitch.com/4e0440bd-1118-45e1-a2d0-7686827e756a%2Fadventure-asia-background-733174.jpg?v=1627945194605"
  );
  //microsoftAttack = loadImage("https://www.blossomhillglass.com/wp-content/uploads/download[1].png");
  microsoftAttackBreak = loadImage(
    "https://cdn.glitch.com/4e0440bd-1118-45e1-a2d0-7686827e756a%2FBrokenWindowImage.jpg?v=1627949718451"
  );
  amazonAttack = loadImage(
    "https://cdn.glitch.com/4e0440bd-1118-45e1-a2d0-7686827e756a%2Famazon%20boxes.jpg?v=1627950770714"
  );
  brokenPackage = loadImage(
    "https://cdn.glitch.com/4e0440bd-1118-45e1-a2d0-7686827e756a%2FFragile-broken-box.jpg?v=1627951635236"
  );
  appleAttack = loadImage(
    "https://cdn.glitch.com/4e0440bd-1118-45e1-a2d0-7686827e756a%2Fapple.jpg?v=1627951871750"
  );
}

function setup() {
  // put setup code here
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100);
  image(screenBackground, width, height);
  randomColor = random(0, 360);
  rectX = 50;
  rectY = 50;
  rectX2 = 100;
  rectY2 = 50;
  time2 = 20000;
  rectangleLoadingPosition = 500;
  yellow = 60;
  box1 = 0;
  box2 = 0;
  box3 = 0;
  box4 = 0;
  box1S = 0;
  box2S = 0;
  box3S = 0;
  box4S = 0;

  mbox1 = 0;
  mbox2 = 0;
  mbox3 = 0;
  mbox4 = 0;
  mbox1S = 0;
  mbox2S = 0;
  mbox3S = 0;
  mbox4S = 0;

  firstSender = 1;

  character1 = "none";
  character2 = "none";

  player1Background = "none";
  player2Background = "none";
  plainBackground = "none";
  player1BackgroundS = "none";
  player2BackgroundS = "none";
  plainBackgroundS = "none";

  startBoxX = 420;
  startBoxY = 230;

  continueBoxX = 340;
  continueBoxY = 320;

  gamestate1 = "startmenu";
  gamestate2 = "startmenu";

  mapXCol1 = 175;
  mapXCol2 = 312.5;

  mapYRow1 = 125;
  mapYRow2 = 212.5;
  mapDimX = 112.5;
  mapDimY = 75;

  attackTime = 0;

  switch1 = "none";
  
  
  
  socket = io.connect("https://quilt-cosmic-spinosaurus.glitch.me");

  //If this socket receives a message called mouse, it will call newdrawing
  socket.on("gameState", changeGameState);
  socket.on("charSelect", stat4);
  socket.on("finMap", setFinalBackground);
  socket.on("char1Location", char2show);
  socket.on("attackingData", losingLives);
}

function losingLives(playerAttackData) {
  console.log("lifeLost");
  char2.lives = playerAttackData.lifeLost;
}

//map
function changeGameState(player1Info) {
  if (player1Info.player1Background == "windmill") {
    player2BackgroundS = "windmill";
  } else if (player1Info.player1Background == "nature") {
    player2BackgroundS = "nature";
  } else if (player1Info.player1Background == "rubble") {
    player2BackgroundS = "rubble";
  } else if (player1Info.player1Background == "castle") {
    player2BackgroundS = "castle";
  }

  firstSender = player1Info.newFirstSender;
  //firstSender becomes 0, meaning the second player to choose the map has the 0 value
  //After it chooses a map, the player that has the firstSender of 0 randomizes a map
  //Then, it sets the background, and sends the information out to the otherplayer to set the map
  setChooser();
  gamestate2 = player1Info.newGamestate;
  //player2Background = data3.newBack;

  //Accidentally wrote "==" here instead of "="
}

function setChooser() {
  console.log("set chooser before" + firstSender);
  firstSender = firstSender + firstSender;

  console.log("set chooser after" + firstSender);
}

function randomizeMap() {
  if (plainBackground == "none") {
    if (firstSender == 2) {
      let randomNum = 0;
      randomNum = int(random(0, 2));
      // let switch2;
      if (randomNum == 0) {
        plainBackgroundS = player1BackgroundS;
      } else if (randomNum == 1) {
        plainBackgroundS = player2BackgroundS;
      }

      console.log("random:" + randomNum);
      console.log(firstSender);
      var finalMapData = {
        newPlainBackground: plainBackgroundS,
        somethingW: 3
      };
      console.log("sending final map data" + finalMapData);
      socket.emit("finMap", finalMapData);
    }
    console.log("running after");
    if (plainBackgroundS == "windmill") {
      plainBackground = windmillMap;
      console.log("setting windmill");
    } else if (plainBackgroundS == "nature") {
      plainBackground = hillsMap;
      console.log("setting nature");
    } else if (plainBackgroundS == "rubble") {
      plainBackground = rubbleMap;
      console.log("setting rubble");
    } else if (plainBackgroundS == "castle") {
      plainBackground = castleMap;
      console.log("setting castle");
    }
  }
}

function setFinalBackground(finalMapData) {
  console.log("final map data" + finalMapData.newPlainBackground);
  plainBackgroundS = finalMapData.newPlainBackground;
}

function stat4(data4) {
  character2 = data4.newChar;
  if (character2 == "google") {
    googleChar = new Character(googleLogo);
    char2 = googleChar;
    // googleChar.showSelf();
  } else if (character2 == "microsoft") {
    microsoftChar = new Character(microsoftLogo);
    char2 = microsoftChar;
    // microsoftChar.showSelf();
  } else if (character2 == "amazon") {
    amazonChar = new Character(amazonLogo);
    char2 = amazonChar;
    // amazonChar.showSelf();
  } else if (character2 == "apple") {
    appleChar = new Character(appleLogo);
    char2 = appleChar;
    // appleChar.showSelf();
  }
}

function char2show(locationData) {
  let tempX;
  let tempY;
  tempX = locationData.newX;
  tempY = locationData.newY;
  char2.receiveLocation(tempX, tempY);
  // attack(char2);
  movement(char2);
  // console.log("temp Y " + tempX);
}

function draw() {
  if (gamestate1 == "startmenu") {
    startMenu();
  } else if (gamestate1 == "menu2") {
    menuu();
  } else if (gamestate1 == "menu3") {
    mapp();
  } else if (gamestate1 == "menu4" && gamestate2 != "menu4") {
    waitt();
  } else if (gamestate1 == "menu4" && gamestate2 == "menu4") {
    randomizeMap();
    gameRunning();
    noMoreLives();
    countDownAttack();
    char2.showSelf();
    char2.updateSelf();
    char2X = char2.x;
    char2Y = char2.y;
    sendMovementData();
    // console.log(char1.x + 'y' + char1.y);
  } else if (gamestate1 == "gameover") {
    endGame();
  }
}

function sendMovementData() {
  char1.showSelf();
  // attack(char1);
  movement(char1);
  char1.updateSelf();
  function char2show(locationData) {
    let tempX;
    let tempY;
    tempX = locationData.newX;
    tempY = locationData.newY;
    char2.receiveLocation(tempX, tempY);
    // attack();
    movement(char2);
    console.log("temp Y " + tempX);
  }

  var locationData = {
    newX: char1.x,
    newY: char1.y
  };

  socket.emit("char1Location", locationData);
}

function movement() {
  //player1 controls
  if (keyIsDown(65)) {
    char1.left();
  }
  if (keyIsDown(68)) {
    char1.right();
  }
}

// function attack() {
//   //player 1 attack
//   if (keyIsDown(82)) {
//     if (attackTime == 0) {
//       char1.attack();
//       attackTime = 1000;
//     }
//   }
// }

function keyTyped() {
  if(key === 'v'){
    char1.attack();
  }
}

function countDownAttack() {
  if (attackTime > 0) {
    attackTime--;
  }
}

function keyPressed() {
  //player1 controls
  if (keyCode === 87) {
    char1.up();
  }
}

function movement2(data2) {
  rectX2 = data2.newRectX;
  rectY2 = data2.newRectY;
}

function startMenu() {
  image(screenBackground, 0, 0, width, height);
  image(logo, 0, -20, 600, 400);
  fill("orange");
  rect(startBoxX, startBoxY, 110, 60);
  fill("black");
  textFont("Verdana", 25);
  text("START", startBoxX + 12, startBoxY + 38);
  textSize(20);
  //This was causing the error
  textSize(15);
}

function mouseClicked() {
  if (
    mouseX > startBoxX &&
    mouseX < startBoxX + 100 &&
    mouseY > startBoxY &&
    mouseY < startBoxY + 60 &&
    gamestate1 == "startmenu"
  ) {
    gamestate1 = "menu2";
  } else if (
    mouseX > continueBoxX &&
    mouseX < continueBoxX + 150 &&
    mouseY > continueBoxY &&
    mouseY < continueBoxY + 50 &&
    gamestate1 == "menu2" &&
    character1 != "none"
  ) {
    gamestate1 = "menu3";

    var data4 = {
      newChar: character1,
      randomX: 5
    };

    socket.emit("charSelect", data4);

    //Character 1
    if (character1 == "google") {
      googleChar = new Character(googleLogo);
      char1 = googleChar;
    } else if (character1 == "microsoft") {
      microsoftChar = new Character(microsoftLogo);
      char1 = microsoftChar;
    } else if (character1 == "amazon") {
      amazonChar = new Character(amazonLogo);
      char1 = amazonChar;
    } else if (character1 == "apple") {
      appleChar = new Character(appleLogo);
      char1 = appleChar;
    }

    // FOR CHARACTER2
    // if (character2 == "google") {
    //   googleChar = new Character(googleLogo);
    //   char2 = googleChar;
    // } else if (character2 == "microsoft") {
    //   microsoftChar = new Character(microsoftLogo);
    //   char2 = microsoftChar;
    // } else if (character2 == "amazon") {
    //   amazonChar = new Character(amazonLogo);
    //   char2 = amazonChar;
    // } else if (character2 == "apple") {
    //   appleChar = new Character(appleLogo);
    //   char2 = appleChar;
    // }
  }if (
    mouseX > continueBoxX &&
    mouseX < continueBoxX + 150 &&
    mouseY > continueBoxY &&
    mouseY < continueBoxY + 50 &&
    gamestate1 == "menu3" &&
    player1BackgroundS != "none"
  ) {
    if (player1BackgroundS == "windmill") {
      // player1Background = windmillMap;
      console.log("windmill");
    } else if (player1BackgroundS == "nature") {
      // player1Background = hillsMap;
      console.log("nature");
    } else if (player1BackgroundS == "rubble") {
      // player1Background = rubbleMap;
      console.log("rubble");
    } else if (player1BackgroundS == "castle") {
      // player1Background = castleMap;
      console.log("castle");
    }

    gamestate1 = "menu4";

    var player1Info = {
      newGamestate: gamestate1,
      player1Background: player1BackgroundS,
      newFirstSender: firstSender
    };

    socket.emit("gameState", player1Info);
  } else if (
    mouseX > 112.5 &&
    mouseX < 187.5 &&
    mouseY > 150 &&
    mouseY < 225 &&
    gamestate1 == "menu2"
  ) {
    resetCharColors();
    box1 = yellow;
    box1S = 100;
    character1 = "google";
  } else if (
    mouseX > 212.5 &&
    mouseX < 287.5 &&
    mouseY > 150 &&
    mouseY < 225 &&
    gamestate1 == "menu2"
  ) {
    resetCharColors();
    box2 = yellow;
    box2S = 100;
    character1 = "apple";
  } else if (
    mouseX > 312.5 &&
    mouseX < 387.5 &&
    mouseY > 150 &&
    mouseY < 225 &&
    gamestate1 == "menu2"
  ) {
    resetCharColors();
    box3 = yellow;
    box3S = 100;
    character1 = "microsoft";
  } else if (
    mouseX > 412.5 &&
    mouseX < 487.5 &&
    mouseY > 150 &&
    mouseY < 225 &&
    gamestate1 == "menu2"
  ) {
    resetCharColors();
    box4 = yellow;
    box4S = 100;
    character1 = "amazon";

    //Map selection
  } else if (
    mouseX > 175 &&
    mouseX < 287.5 &&
    mouseY > 125 &&
    mouseY < 200 &&
    gamestate1 == "menu3"
  ) {
    player1BackgroundS = "windmill";
    resetMapColors();
    mbox1 = yellow;
    mbox1S = 100;
  } else if (
    mouseX > 312.5 &&
    mouseX < 425 &&
    mouseY > 125 &&
    mouseY < 200 &&
    gamestate1 == "menu3"
  ) {
    player1BackgroundS = "rubble";
    resetMapColors();
    mbox2 = yellow;
    mbox2S = 100;
  } else if (
    mouseX > 175 &&
    mouseX < 287.5 &&
    mouseY > 212.5 &&
    mouseY < 287.5 &&
    gamestate1 == "menu3"
  ) {
    player1BackgroundS = "castle";
    resetMapColors();
    mbox3 = yellow;
    mbox3S = 100;
  } else if (
    mouseX > 312.5 &&
    mouseX < 425 &&
    mouseY > 212.5 &&
    mouseY < 287.5 &&
    gamestate1 == "menu3"
  ) {
    player1BackgroundS = "nature";
    resetMapColors();
    mbox4 = yellow;
    mbox4S = 100;
  } else if (
    gamestate1 == "gameover" &&
    mouseX > continueBoxX &&
    mouseX < continueBoxX + 150 &&
    mouseY > continueBoxY &&
    mouseY < continueBoxY + 50
  ) {
    resetEntireGame();
  }
}

function resetEntireGame() {
  firstSender = 1;

  character1 = "none";
  character2 = "none";

  player1Background = "none";
  player2Background = "none";
  plainBackground = "none";
  player1BackgroundS = "none";
  player2BackgroundS = "none";
  plainBackgroundS = "none";

  gamestate1 = "startmenu";
  gamestate2 = "startmenu";
  time2 = 20000;
}

function resetCharColors() {
  box1 = 0;
  box2 = 0;
  box3 = 0;
  box4 = 0;
  box1S = 0;
  box2S = 0;
  box3S = 0;
  box4S = 0;
}

function resetMapColors() {
  mbox1 = 0;
  mbox2 = 0;
  mbox3 = 0;
  mbox4 = 0;
  mbox1S = 0;
  mbox2S = 0;
  mbox3S = 0;
  mbox4S = 0;
}

function menuu() {
  let rectangleY, rectangleDim;
  let google;

  rectangleY = 150;
  rectangleDim = 75;
  image(selectionBackground, 0, 0, width, height);

  //title
  textSize(50);
  fill("white");
  text("Choose Character", 70, 70);
  fill("black");
  //orange continue box
  fill("orange");
  rect(continueBoxX, continueBoxY, 150, 50);

  noStroke();
  fill(box1, box1S, 100);
  rect(112.5, rectangleY, rectangleDim, rectangleDim);
  image(googleLogo, 112.5, rectangleY, rectangleDim, rectangleDim);

  fill(box2, box2S, 100);
  rect(212.5, rectangleY, rectangleDim, rectangleDim);
  image(appleLogo, 212.5, rectangleY, rectangleDim, rectangleDim);

  fill(box3, box3S, 100);
  rect(312.5, rectangleY, rectangleDim, rectangleDim);
  image(microsoftLogo, 312.5, rectangleY, rectangleDim, rectangleDim);

  fill(box4, box4S, 100);
  rect(412.5, rectangleY, rectangleDim, rectangleDim);
  image(amazonLogo, 412.5, rectangleY, rectangleDim, rectangleDim);

  fill("black");
  textSize(20);
  text("CONTINUE", 360, 350);
  textSize(20);
  fill("white");
  text(`---------------------------------------------------`, 60, 100);
  textSize(15);
  fill("black");
}

function mapp() {
  image(selectionBackground, 0, 0, width, height);

  let rectangleYRow1, rectangleYRow2;
  let rectangleDimX, rectangleDimY;
  let google;

  rectangleYRow1 = 125;
  rectangleYRow2 = 212.5;
  rectangleDimX = 112.5;
  rectangleDimY = 75;

  //orange continue box
  fill("orange");
  rect(continueBoxX, continueBoxY, 150, 50);

  //choose map text
  fill("white");
  textSize(50);
  text("Choose Map", 130, 70);
  fill("black");

  fill(mbox1, mbox1S, 100);
  rect(175 - 5, rectangleYRow1 - 5, rectangleDimX + 10, rectangleDimY + 10);
  image(windmillMap, 175, rectangleYRow1, rectangleDimX, rectangleDimY);

  fill(mbox2, mbox2S, 100);
  rect(312.5 - 5, rectangleYRow1 - 5, rectangleDimX + 10, rectangleDimY + 10);
  image(rubbleMap, 312.5, rectangleYRow1, rectangleDimX, rectangleDimY);

  fill(mbox3, mbox3S, 100);
  rect(175 - 5, rectangleYRow2 - 5, rectangleDimX + 10, rectangleDimY + 10);
  image(castleMap, 175, rectangleYRow2, rectangleDimX, rectangleDimY);

  fill(mbox4, mbox4S, 100);
  rect(312.5 - 5, rectangleYRow2 - 5, rectangleDimX + 10, rectangleDimY + 10);
  image(hillsMap, 312.5, rectangleYRow2, rectangleDimX, rectangleDimY);

  fill("black");
  textSize(20);
  text("CONTINUE", 360, 350);
  textSize(20);
  fill("white");
  text(`---------------------------------------------------`, 60, 100);
  textSize(15);
  fill("black");
}

function waitt() {
  image(waitingBackground, 0, 0, width, height);
  fill("black");
  textSize(50);
  console.log(gamestate1);
  console.log(gamestate2);
  fill("white");
  text("Waiting for opponent...", 10, 80);
}

function startt() {
  image(screenBackground, 0, 0, width, height);
  rect(100, 200, 200, 50);
  textSize(50);
  text("START!", 40, 100);
  textSize(15);
  textSize(20);
  text(`-------------------------`, 60, 130);
  textSize(15);
}

function gameRunning() {
  if (plainBackground != "none") {
    // console.log("plain background is set");
    image(plainBackground, 0, 0, width, height);
    //gamestate1 == "running";
    //characters selected
    // test.showSelf();
    // test.updateSelf();
    movement();
    timeHandle();

    textSize(30);
    text(`Lives: ${char2.lives}`, 10, 30);
    text(`Lives: ${char1.lives}`, 460, 30);
  }
}

function endGame() {
  background(30, 100, 100);
  fill("white");
  rect(continueBoxX, continueBoxY, 150, 50);
  fill("black");
  textSize(50);
  text("GAME OVER!", 130, 90);
  textSize(15);
  text("CONTINUE", 360, 350);
  textSize(20);
  text(`---------------------------------------------------`, 60, 120);
  textSize(50);
  if(char2.lives > char1.lives){
    text("YOU WIN!", 160, 200);
  }
  else if(char1.lives > char2.lives){
    text("YOU LOSE!", 160, 200);
  }
  textSize(15);
}

function noMoreLives(){
  if(char1.lives <= 0){
    gamestate1 = "gameover";
  }
  else if(char2.lives <= 0){
    gamestate1 = "gameover";
  }
}

function timeHandle() {
  if (time2 > 0) {
    time2--;
  } else {
    gamestate1 = "gameover";
  }
}

class Character {
  constructor(imageRequested) {
    this.imageRequested = imageRequested;
    this.x = random(50, width - 50);
    this.y = random(50, height - 50);
    this.size = 50;
    //this.size = 50;
    // this.damage = 0;
    this.lives = 3;

    //gravity stuff
    this.velocity = 0;
    this.lift = -15;
    this.gravity = 0.6;
  }

  showSelf() {
    //image(this.imageRequested, this.x, this.y, 50, 50);
    image(this.imageRequested, this.x, this.y, 50, 50);
  }

  checkCollision(attackRect) {
    //console.log("Attack rect   " + attackRect.x);
    //console.log("Microsoft char   " + microsoftChar.x);
    //console.log("Amazon char      " + amazonChar.x)
    //console.log("Apple char       " + appleChar.x)
    if (
      collideRectRect(
        attackRect.arrayX,
        attackRect.arrayY,
        attackRect.arrayWidth,
        attackRect.arrayHeight,
        char2X,
        char2Y,
        50,
        50
      )
    ) {
      this.lives -= 1;
      console.log("life lost" + this.lives);
      this.damage += 10;
      attackRect.x = 700;
      attackRect.y = 700;
      //googleChar.respawn(googleChar);

      var playerAttackData = {
        lifeLost: this.lives,
        notImportantVariable: 5
      };
      console.log("sendind information of playerAttackData");
      socket.emit("attackingData", playerAttackData);
    }

    //attackTime = 5
    /*if(googleChar.l        text("Google has died", 15, 15)
ives == 0)
      {
      }
      else
      {
        googleChar.showSelf();
      } */
    // }
    //     } else if (microsoftChar && collideRectRect(attackRect.x, attackRect.y, attackRect.width, attackRect.height, microsoftChar.x, microsoftChar.y, 50, 50)) {
    //       microsoftChar.lives -= 1;
    //       microsoftChar.damage += 25;
    //       attackRect.x = 700
    //       attackRect.y = 700
    //       microsoftChar.respawn(microsoftChar);

    //       var playerAttackData = {
    //         lifeLost: microsoftChar.lives,
    //         notImportantVariable: 5
    //       }
    //       socket.emit("attackingData", playerAttackData);
    //       //attackTime = 5
    //     /*  if(microsoftChar.lives == 0)
    //       {
    //         text("Microsoft has died", 15, 15)
    //       }
    //       else
    //       {
    //         microsoftChar.showSelf();
    //       } */
    //     } else if (amazonChar && collideRectRect(attackRect.x, attackRect.y, attackRect.width, attackRect.height, amazonChar.x, amazonChar.y, 50, 50)) {
    //       amazonChar.lives -= 1;
    //       amazonChar.damage += 25;
    //       attackRect.x = 700
    //       attackRect.y = 700
    //       amazonChar.respawn(amazonChar);

    //       var playerAttackData = {
    //         lifeLost: amazonChar.lives,
    //         notImportantVariable: 5
    //       }
    //       socket.emit("attackingData", playerAttackData);
    //      /* if(amazonChar.lives == 0)
    //       {
    //         text("Amazon has died", 15, 15)
    //       }
    //       else
    //       {
    //         amazonChar.showSelf();
    //       } */
    //     } else if (appleChar && collideRectRect(attackRect.x, attackRect.y, attackRect.width, attackRect.height, appleChar.x, appleChar.y, 50, 50)) {
    //       appleChar.lives -= 1;
    //       appleChar.damage += 25;
    //       attackRect.x = 700
    //       attackRect.y = 700
    //       appleChar.respawn(appleChar);

    //       var playerAttackData = {
    //         lifeLost: appleChar.lives,
    //         notImportantVariable: 5
    //       }
    //       socket.emit("attackingData", playerAttackData);

    //       /*if(appleChar.lives == 0)
    //       {
    //         text("Apple has died", 15, 15)
    //       }
    //       else
    //       {
    //         appleChar.showSelf();
    //       } */
    //     }
  }

  respawn(attackedCharacter) {
    //console.log(attackedCharacter.lives)
    if (attackedCharacter.lives <= 0) {
      text("You have died", 50, 50);
    } else {
      text("Lives remaning", 100, 100);
      //image(attackedCharacter.imageRequested, attackedCharacter.x, random(50), 50, 50)
    }
  }

  attack() {
    //google attack
    let attackWidth = this.x;
    let attackHeight = this.y;
    let attackRect = {
      arrayX: attackWidth,
      arrayY: attackHeight,
      arrayWidth: 50,
      arrayHeight: 50
    };
    //let attackRect = rect(attackWidth, attackHeight, 25, 25)
    this.checkCollision(attackRect);
    // image(
    //   googleAttack,
    //   attackWidth,
    //   attackHeight,
    //   25,
    //   25
    // );
    //microsoft attack
    //      else if (this.imageRequested == microsoftLogo) {
    //       let attackWidth = this.x
    //       let attackHeight = this.y
    //       let attackRect = {x: attackWidth, y: attackHeight, width: 10, height: 10}
    //       //let attackRect = rect(attackWidth, attackHeight, 10, 10)
    //       this.checkCollison(attackRect);
    //       // image(microsoftAttack, attackWidth, attackHeight, 10, 10);
    //       // let windowBreakTime = random(0, 60);
    //       // let time = 0;
    //       // for (let i = 0; i < windowBreakTime; i++) {
    //       //   time++;
    //       //   if (time == windowBreakTime) {
    //       //     break;
    //       //   }
    //       // }
    //       // image(microsoftAttackBreak, attackWidth, attackHeight, 10, 10);
    //       //amazon attack
    //     } else if (this.imageRequested == amazonLogo) {
    //       let attackWidth = this.x
    //       let attackHeight = this.y
    //       let attackRect = {x: attackWidth, y: attackHeight, width: 10, height: 10}
    //       //let attackRect = rect(attackWidth, attackHeight, 10, 10)
    //       this.checkCollision(attackRect)
    //       // image(amazonAttack, attackWidth, attackHeight, 10, 10);
    //       // this.y = 50
    //       // let packageBombTime = random(0, 60);
    //       // let time = 0;
    //       // for (let i = 0; i < packageBombTime; i++) {
    //       //   time++;
    //       //   if (time == packageBombTime) {
    //       //     break;
    //       //   }
    //       // }
    //       // image(brokenPackage, attackWidth, attackHeight, 10, 10);

    //       //apple attack
    //     } else if (this.imageRequested == appleLogo) {
    //       let attackWidth = this.x
    //       let attackHeight = this.y
    //       let attackRect = {x: attackWidth, y: attackHeight, width: 10, height: 10}
    //       //let attackRect = rect(attackWidth, attackHeight, 10, 10)
    //       this.checkCollision(attackRect);
    //       // image(
    //       //   appleAttack,
    //       //   attackWidth,
    //       //   attackHeight,
    //       //   10,
    //       //   10
    //       // );
  }

  up() {
    this.velocity += this.lift;
  }

  left() {
    this.x = this.x - 1;

    if (this.x < this.size) {
      this.x = this.size;
    }
  }

  right() {
    this.x = this.x + 1;

    if (this.x > width - this.size) {
      this.x = width - this.size;
    }
  }

  receiveLocation(x, y) {
    this.x = x;
    this.y = y;
  }

  updateSelf() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height - this.size) {
      this.y = height - this.size;
      this.velocity = 0;
    }
  }
}

// class Character {
//   constructor(imageRequested) {
//     this.imageRequested = imageRequested;
//     this.x = random(50, width - 50);
//     this.y = random(50, height - 50);
//     this.size = 50;
//     this.size = 50;
//     this.damage = 0;
//     this.lives = 3;

//     //gravity stuff
//     this.velocity = 0;
//     this.lift = -15;
//     this.gravity = 0.6;
//   }

//   showSelf() {
//     image(this.imageRequested, this.x, this.y, 50, 50);
//   }

//   checkCollision(attackImage) {
//     if (attackImage.collide(googleLogo)) {
//       googleChar.lives -= 1;
//       googleChar.damage += 10;
//     } else if (attackImage.collide(microsoftLogo)) {
//       microsoftChar.lives -= 1;
//       microsoftChar.damage += 25;
//     } else if (attackImage.collide(amazonLogo)) {
//       amazonChar.lives -= 1;
//       amazonChar.damage += 25;
//     } else if (attackImage.collide(appleLogo)) {
//       appleChar.lives -= 1;
//       appleChar.damage += 25;
//     }
//   }

//   attack() {
//     //google attack
//     if (this.imageRequested == googleLogo) {
//       image(
//         googleAttack,
//         random(this.x - 25, this.x + 25),
//         random(this.y - 25, this.y + 25),
//         25,
//         25
//       );

//       //microsoft attack
//     } else if (this.imageRequested == microsoftLogo) {
//       let attackWidth = random(this.x - 25, this.x + 25);
//       let attackHeight = random(this.y - 25, this.y + 25);
//       image(microsoftAttack, attackWidth, attackHeight, 10, 10);
//       let windowBreakTime = random(0, 60);
//       let time = 0;
//       for (let i = 0; i < windowBreakTime; i++) {
//         time++;
//         if (time == windowBreakTime) {
//           break;
//         }
//       }
//       image(microsoftAttackBreak, attackWidth, attackHeight, 10, 10);
//       checkCollison(microsoftAttackBreak);

//       //amazon attack
//     } else if (this.imageRequested == amazonLogo) {
//       let attackWidth = random(this.x - 25, this.x + 25);
//       let attackHeight = random(this.y - 25, this.y + 25);
//       image(amazonAttack, attackWidth, attackHeight, 10, 10);
//       let packageBombTime = random(0, 60);
//       let time = 0;
//       for (let i = 0; i < packageBombTime; i++) {
//         time++;
//         if (time == packageBombTime) {
//           break;
//         }
//       }
//       image(brokenPackage, attackWidth, attackHeight, 10, 10);
//       this.checkCollision(brokenPackage);

//       //apple attack
//     } else if (this.imageRequested == appleLogo) {
//       image(
//         appleAttack,
//         random(this.x - 25, this.x + 25),
//         random(this.y - 25, this.y + 25),
//         10,
//         10
//       );
//       this.checkCollision(appleAttack);
//     }
//   }

//   up() {
//     this.velocity += this.lift;
//     if (this.y < 0) {
//       this.y = 0;
//     }
//   }

//   left() {
//     this.x = this.x - 1;

//     if (this.x < 0) {
//       this.x = 0;
//     }
//   }

//   right() {
//     this.x = this.x + 1;

//     if (this.x > width - this.size) {
//       this.x = width - this.size;
//     }
//   }

//   updateSelf() {
//     this.velocity += this.gravity;
//     this.velocity *= 0.9;
//     this.y += this.velocity;

//     if (this.y > height - this.size) {
//       this.y = height - this.size;
//       this.velocity = 0;
//     }
//   }
// }
