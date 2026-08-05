// Realm Runners
// Part 1 Script

const buttons = document.querySelectorAll("button");
const roomInput = document.querySelector("input");

// Button order:
// 0 = Create Room
// 1 = Join Room
// 2 = Leaderboard
// 3 = Settings

buttons[0].addEventListener("click", createRoom);
buttons[1].addEventListener("click", joinRoom);
buttons[2].addEventListener("click", leaderboard);
buttons[3].addEventListener("click", settings);

function createRoom(){

    const code = randomCode();

    alert(
`Room Created!

Room Code: ${code}

Share this code with your friends.`
    );

}

function joinRoom(){

    const code = roomInput.value.trim().toUpperCase();

    if(code===""){
        alert("Please enter a room code.");
        return;
    }

    alert(`Joining Room ${code}...`);

}

function leaderboard(){

    alert(
`Leaderboard

1. Alex - 12500
2. Jamie - 11700
3. Riley - 10950

(Multiplayer leaderboard coming soon!)`
    );

}

function settings(){

    alert(
`Settings

✓ Music
✓ Sound Effects
✓ Fullscreen

(More settings coming soon!)`
    );

}

function randomCode(){

    const letters="ABCDEFGHJKLMNPQRSTUVWXYZ";
    let code="";

    for(let i=0;i<6;i++){

        code += letters[Math.floor(Math.random()*letters.length)];

    }

    return code;

}
