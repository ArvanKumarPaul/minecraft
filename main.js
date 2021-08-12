var canvas = new fabric.Canvas('myCanvas');

var player_X = 10;
var player_Y = 10;

var block_img_width = 30;
var block_img_height = 30;

var player_object = "";
var block_img_object = "";

function player_update() {

  fabric.Image.fromURL("player.png" , function(Img){

    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);

    player_object.set( {

      top:player_Y ,
      left:player_X 

    });

    canvas.add(player_object);

  });

}

function new_image(get_image) {

  fabric.Image.fromURL(get_image , function(Img){

    block_img_object = Img;
    block_img_object.scaleToWidth(block_img_width);
    block_img_object.scaleToHeight(block_img_height);

    block_img_object.set( {
      
      top:player_Y ,
      left:player_X     

    });

    canvas.add(block_img_object);

  });

} 

window.addEventListener("keydown" , my_keydown);

function my_keydown(e) {

  var key_pressed = e.keyCode;
  console.log(key_pressed);

  if(e.shiftKey == true && key_pressed == '80') {

    console.log("shift and P pressed together");
    block_img_height = block_img_height + 10;
    block_img_width = block_img_width + 10;
    console.log("current height = " + block_img_height);
    console.log("current width = " + block_img_width);
    document.getElementById("current_width").innerHTML = block_img_width;
    document.getElementById("current_height").innerHTML = block_img_height;

  }

if(e.shiftKey == true && key_pressed == '77') {

  console.log("shift and M pressed together");
  block_img_height = block_img_height - 10;
  block_img_width = block_img_width - 10;
  console.log("current height = " + block_img_height);
  console.log("current width = " + block_img_width);
  document.getElementById("current_width").innerHTML = block_img_width;
  document.getElementById("current_height").innerHTML = block_img_height;

}

if(key_pressed == '38') {

  up();
  console.log("up");

}

if(key_pressed == '40') {

  down();
  console.log("down");

}

if(key_pressed == '37') {

  left();
  console.log("left");

}

if(key_pressed == '39') {

  right();
  console.log("right");

}

if(key_pressed == '67') {

  new_image('cloud.jpg')
  console.log("C");

}

if(key_pressed == '87') {

  new_image('wall.jpg')
  console.log("W");

}

if(key_pressed == '85') {

  new_image('unique.png')
  console.log("U");

}

if(key_pressed == '89') {

  new_image('yellow_wall.png')
  console.log("Y");

}

if(key_pressed == '84') {

  new_image('trunk.jpg')
  console.log("T");

}

if(key_pressed == '82') {

  new_image('roof.jpg')
  console.log("R");

}

if(key_pressed == '76') {

  new_image('light_green.jpg')
  console.log("L");

}

if(key_pressed == '68') {

  new_image('dark_green.jpg')
  console.log("D");

}

if(key_pressed == '71') {

  new_image('ground.jpg')
  console.log("G");

}

}

function up() {

  if(player_Y >= 0){

    player_Y = player_Y - block_img_height;
    console.log("block image height " + block_img_height);
    console.log("when up arrow is pressed , X = " + player_X + " , Y = " + player_Y);
    canvas.remove(player_object);
    player_update();
  }

}

function down() {

  if(player_Y <= 500){

    player_Y = player_Y + block_img_height;
    console.log("block image height " + block_img_height);
    console.log("when down arrow is pressed , X = " + player_X + " , Y = " + player_Y);
    canvas.remove(player_object);
    player_update();
  }

}

function left() {

  if(player_X >= 0) {

    player_X = player_X - block_img_width;
    console.log("block image width" + block_img_width);
    console.log("when left is pressed , X = " + player_X + " , Y = " + player_Y);
    canvas.remove(player_object);
    player_update();

  }

}

function right()  {

  if(player_X <= 1000) {

    player_X = player_X + block_img_width;
    console.log("block image width" + block_img_width);
    console.log("when right is pressed , X = " + player_X + " , Y = " + player_Y);
    canvas.remove(player_object);
    player_update();

  }

}