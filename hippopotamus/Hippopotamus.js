class Hippopotamus {
    constructor(name, weight, tusksSize) {
        this.name = name;
        this.weight = weight;
        this.tusksSize = tusksSize;
    }

    swim() {
        this.weight -= 300;
    }

    eat() {
        this.weight += 1000;
    }

    fight(hippo) {
        if (this.tusksSize > hippo.tusksSize) {
            return `${this.name} a gagné le combat contre ${hippo.name} !`;
        } else if (this.tusksSize < hippo.tusksSize) {
            return `${hippo.name} a gagné le combat contre ${this.name} !`;
        } else {
            return `${this.name} et ${hippo.name} ont des défenses de même taille, match nul !`;
        }
    }

    toString() {
        return `${this.name} pèse ${this.weight} kg et a des défenses de taille ${this.tusksSize}.`;
    }
}

module.exports = Hippopotamus;
