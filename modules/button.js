class Button {

    static solve(input, bomb) {

        if (bomb) {

            let [colour, text] = input.split(" ")

            if (!(colour && text)) {
                throw "Expected colour and text, got: colour - " + colour + "; text - " + text; 
            }

            if (colour === "blue" && text === "abort") {
                return "HOLD"
            } else if (bomb.batteries > 1 && text === "detonate") {
                return "RELEASE"
            } else if (colour === "white" && bomb.car) {
                return "HOLD"
            } else if (bomb.batteries > 2 && bomb.frk) {
                return "RELEASE"
            } else if (colour === "yellow") {
                return "HOLD"
            } else if (colour === "red" && text === "hold") {
                return "RELEASE"
            } else {
                return "HOLD"
            }

        } else {

            if (input === "blue") {
                return "4"
            } else if (input === "yellow") {
                return "5"
            } else {
                return "1"
            }

        }

    }

}

const Bomb = require("./bomb")
console.log(Button.solve("reddetonate", new Bomb()))

module.exports = Button