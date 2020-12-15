class Character {
    constructor(name) {
        this.name = name,
        this.health = 100, 
        this.hunger = 0, 
        this.thirst = 0
    }

    getName() {
        return this.name
    }

    getHealth() {
        return this.health
    }

    getHunger() {   
        return this.hunger
    }

    getThirst() {   
        return this.thirst
    }

}

module.exports = Character