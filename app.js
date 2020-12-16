const inquirer = require("inquirer")

const Character = require("./lib/Character")

const character = []
var hasAname = false

let newCharacter = []

function readyToStart() {
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
                    console.log(`Ok, well come back some other time.....see you soon ${newCharacter[0].name}.`)
                    break


            }

        })
}


function startGame() {
    inquirer  
    .prompt([

        {
            type: 'list',
            name: 'readyToStart',
            message: "You awake on a beach with no recollection of how you arrived here. You scan up and down the shore but there is no sign of human activity. Behind you is nothing but vast open ocean a far as the eye can see and in front of you lies a seemingly impenetrable jungle emanating an array of screaches and howls from its animal inhabitance. What would you like to do?",
            choices: [
                'Walk North along the beach',
                'Walk South along the beach',
                'Head into the jungle',
                'Turn around and start swimming into the ocean'
            ]
        }

    ]).then(userChoice => {
        switch (userChoice.readyToStart) {

            case 'Walk North along the beach':
                walkNorth()
                break

            case 'Walk South along the beach':
                walkSouth()
                break

            case 'Head into the jungle':
                intoJungle()
                break

            case 'Turn around and start swimming into the ocean':
                startSwimming()
                break


        }

    })
}


function startSwimming() {
    const outcomes = [

        'you turn around and start to swim into the ocean. You make it about 100 yards from the beach when all of the sudden a great white shark emerges from the depths and rips you to shreds. GAME OVER.',

        'you turn around and start to swim into the ocean. you swim and swim and just as the shore vanishes into the distance you beguin to get a side cramp with no other sight of land you turn around and start to swim back towards the beach. Half way back to the beach you become so exhuasted you are fighting to keep above the water. within 50 yards of the shore you cannot go on and drown. GAME OVER.',

        'you turn around and start to swim into the ocean but are immediately eatten by a shark. GAME OVER.'
    ]

    const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];

    console.log(outcome)

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



