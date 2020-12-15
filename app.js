const inquirer = require("inquirer")

const Character = require("./lib/Character")

const character = []
var hasAname = false

let newCharacter = []

async function readyToStart() {
    inquirer  
        .prompt([

            {
                type: 'list',
                name: 'readyToStart',
                message: `Hello ${newCharacter[0].name} here are your stats:

                Health: ${newCharacter[0].health} 
                Hunger: ${newCharacter[0].hunger} 
                Thirst: ${newCharacter[0].thirst} \n\n are your ready to start?`,
                choices: [
                    'Yes',
                    'No'
                ]
            }

        ]).then(userChoice => {
            switch (userChoice.readyToStart) {

                case 'Yes':
                    startGame()
                    break

                case 'No':
                    console.log(`Ok, well come back some other time.....see you soon ${character.name}.`)
                    break


            }

        })
}


Init()

async function Init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "hello stranger what is your name?",
                name: "charactersName"
            }
        ]).then(userChoice => {
            const character = new Character(userChoice.charactersName)
            newCharacter.push(character)
            console.log(newCharacter[0].name)
            hasAname = true
            
            readyToStart()
        })

}



