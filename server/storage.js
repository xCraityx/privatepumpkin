const ReadJSON = require('./json');
const Room = require('./room');
const path = require('path');

const players = [];
const rooms = [];

/*****************
 * Players
 *****************/
function GetPlayerIndex(nickname) {
    return players.findIndex(p=>p.nickname===nickname);
}

function SaveNewPlayer(player) {
    var index = GetPlayerIndex(player.nickname);
    if(index == -1) {
        players.push(player);
    }
}

function GetPlayer(nickname) {
    return players.find(p=>p.nickname===nickname);
}

/*****************
 * ROOMS
 *****************/
var folder = path.join(global.appDir,"./rooms/");
console.log("ROOMS:",folder)
var roomIds = [
    "plaza"
]


function InitRooms() {
    roomIds.forEach(roomId=>{
        SaveNewRoom(roomId);
    });
}

function GetRoomIndex(roomId) {
    return rooms.findIndex(r=>r.id===roomId);
}

function GetRoom(roomId) {
    return rooms.find(r=>r.id===roomId);
}

InitRooms();

module.exports = {
    SaveNewPlayer,
    GetPlayer,
    GetRoom
}
