import* as $ from "jquery";

export class Quote{
    text: string;
}

export class Player {
    name: "Moshe Plotkin"; 
    quotes: Quote[] = [];
    score: number = 0;

    drawQuotes(){
        $("my-quotes").html(
            this.quotes.map(x=> '<li class="list-group-item">${x.text}</li>').join("")
        )
    } 
}

export class Room {
    players: Player[] = [new Player(), new Player()];
    dealer:  Player;
    pictures: string[] = [
        "https://i.ytimg.com/vi/tYBk4kLHPkk/maxresdefault.jpg", 
        "https://i.ytimg.com/vi/tYBk4kLHPkk/maxresdefault.jpg"
    ];
    quotes: Quote[] = [
        { text: "Get me out of here" },
        { text: "They're just fine"}
    ];
    drawPicture() {
        $("#picure").attr("src", this.pictures);
        
    }
    drawQuotes(){
        $("played-quotes").html(
            this.quotes.map(x=> '<li class="list-group-item">${x.text}</li>').join("")
        )
    }
    drawPlayers(){
        $("#players").html(
            this.players.map(x=> '<li class="list-group-item">${x.name}</li>').join("")
        )
    }  
}

export class Game{
    players: Player[] = [];
    pictures: string[] = [];
    quotes: Quote[] = [];
}

//controller

const game = new Game();
const room = new Room();
const me = new Player();

var i = 0;
room.pictures = game.pictures[i];
room.drawPicture();
room.drawQuotes();
room.drawPlayers();

me.quotes = game.quotes;
me.drawQuotes();

$("#cmd-flip").click(function(e){
    e.preventDefault();
    i++;
    room.pictures = game.pictures[i];
    room.drawPicture();    
})