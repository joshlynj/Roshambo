const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv


class Game {
    constructor(moves, computer, player){
        this._moves = moves;
        this._computer = computer;
        this._player = player;
    }

    playGame(){
        let playerMove = player.makeMove();
        let computerMove = computer.makeMove(playerMove); 
        return `Playing a game of Roshambo against the computer. \n Player plays ${playerMove}! \n Computer plays ${computerMove}! \n ~Computer Wins ~ `; 
    }
}



class Moves{
    constructor(){
        this._rock = 'rock'
        this._paper = 'paper'
        this._scissors = 'scissors'
    }

    get Rock() {
        return this._rock; 
    }

    get Paper(){
        return this._paper;
    }

    get Scissors(){
        return this._scissors; 
    }

}

class Player {
    constructor (moves){
        this.moves = moves;
    }
    makeMove(){

    }
    // playerMove(move){
    //     this.playerMove.concat(move); 
    // }

    // get playerMove(){
    //     return this.playerMove;
    // }
}

class HumanPlayer extends Player{
    constructor(moves){
        super(moves)
    }

    makeMove(){
        return argv.move; 
    }
}

class ComputerPlayer extends Player{
    constructor(moves){
        super(moves)

    }

    makeMove(playerMove){
        if (playerMove === this.moves.Scissors){
            return this.moves.Rock;
        }

        if (playerMove === this.moves.Paper){
            return this.moves.Scissors
        }

        if (playerMove === this.moves.Rock ){
            return this.moves.Paper;
        }
    }

}


const moves = new Moves(); 
const player = new HumanPlayer(moves); 
const computer = new ComputerPlayer(moves); 
const game = new Game(moves, computer, player); 

console.log(game.playGame()); 


