// const playerOne = {
//     name: 'Tim',
//     marker: 'X'
// };

// const playerTwo = {
//     name: "Jen",
//     marker: "O"
// };

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(this.name);
    }
}

const playerOne = new Player("Ola", "O");
const playerTwo = new Player('Lxmao', "X");

