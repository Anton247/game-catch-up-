let player_position = {
    left: 40,
    top: 50
}

let enemy_position = {
    left: 400,
    top: 50
}

let step = 40;

let player = document.getElementById("player");
let enemy = document.getElementById("enemy");

player.style.position = "absolute";
player.style.left = player_position.left + "px";
player.style.top = player_position.top + "px";

enemy.style.position = "absolute";
enemy.style.left = enemy_position.left + "px";
enemy.style.top = enemy_position.top + "px";

function move(direction){
    if(direction == 'left')
        player_position.left -= step;
    if(direction == 'right')
        player_position.left += step;
    if(direction == 'up')
        player_position.top -= step;
    if(direction == 'down')
        player_position.top += step;

    player.style.left = player_position.left + "px";
    player.style.top = player_position.top + "px";
}