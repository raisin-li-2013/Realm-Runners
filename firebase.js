// ==========================
// Realm Runners - Part 4
// Lobby System
// ==========================

const menu = document.querySelector(".menu");
const roomInput = document.querySelector("input");
const buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", createRoom);
buttons[1].addEventListener("click", joinRoom);
buttons[2].addEventListener("click", leaderboard);
buttons[3].addEventListener("click", settings);

function randomCode() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ123456789";
    let code = "";

    for (let i = 0; i < 6; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }

    return code;
}

function createRoom() {

    const roomCode = randomCode();

    showLobby(roomCode);

}

function joinRoom() {

    const roomCode = roomInput.value.trim().toUpperCase();

    if (roomCode === "") {
        alert("Please enter a room code.");
        return;
    }

    showLobby(roomCode);

}

function leaderboard() {

    alert(
`Leaderboard

1. Alex - 12500
2. Jamie - 11700
3. Riley - 10950`
    );

}

function settings() {

    alert("Settings coming soon!");

}

function showLobby(code){

menu.innerHTML = `

<h1>Realm Runners</h1>

<h2>Room ${code}</h2>

<p>Players: 1 / 8</p>

<div class="player-list">

<div class="player">
🧙 You (Host)
</div>

</div>

<button id="readyBtn">
Ready
</button>

<button id="startBtn">
Start Game
</button>

<button id="leaveBtn">
Leave Room
</button>

`;

document
.getElementById("readyBtn")
.onclick = ready;

document
.getElementById("startBtn")
.onclick = startGame;

document
.getElementById("leaveBtn")
.onclick = leaveRoom;

}

function ready(){

alert("You are Ready!");

}

function startGame(){

alert(
"Mission loading...\n\n(Coop missions coming in Part 5)"
);

}

function leaveRoom(){

location.reload();

}
