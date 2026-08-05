// ==============================
// Realm Runners
// Part 5
// ==============================

const menu = document.querySelector(".menu");

showMainMenu();

function showMainMenu(){

menu.innerHTML = `

<h1>Realm Runners</h1>

<p class="subtitle">
Work together. Complete missions. Save the Realm.
</p>

<button onclick="createRoom()">Create Room</button>

<input id="roomCode" placeholder="Enter Room Code">

<button onclick="joinRoom()">Join Room</button>

<button onclick="leaderboard()">Leaderboard</button>

<button onclick="settings()">Settings</button>

`;

}

function randomCode(){

const letters="ABCDEFGHJKLMNPQRSTUVWXYZ123456789";

let code="";

for(let i=0;i<6;i++){

code+=letters[Math.floor(Math.random()*letters.length)];

}

return code;

}

function createRoom(){

showLobby(randomCode(),true);

}

function joinRoom(){

const code=document.getElementById("roomCode").value.trim().toUpperCase();

if(code===""){

alert("Please enter a room code.");

return;

}

showLobby(code,false);

}

function showLobby(code,isHost){

menu.innerHTML=`

<h1>Lobby</h1>

<h2>Room ${code}</h2>

<p>Players 1 / 8</p>

<div class="player-list">

<div class="player">🧙 You</div>

</div>

<button onclick="ready()">
Ready
</button>

${isHost ? `
<button onclick="startMission()">
Start Mission
</button>
` : ""}

<button onclick="showMainMenu()">
Leave Room
</button>

`;

}

function ready(){

alert("Ready!");

}

function startMission(){

menu.innerHTML=`

<h1>Mission One</h1>

<h2>Castle Rescue</h2>

<p>

Find the hidden key.

Unlock the castle.

Rescue every villager.

Escape before time runs out.

</p>

<button onclick="completeMission()">

Complete Mission

</button>

`;

}

function completeMission(){

menu.innerHTML=`

<h1>Mission Complete!</h1>

<h2>Score</h2>

<h3>800 Points</h3>

<button onclick="showMainMenu()">

Return Home

</button>

`;

}

function leaderboard(){

alert("Leaderboard coming soon!");

}

function settings(){

alert("Settings coming soon!");

}
