class User {
    constructor(email, nom, prenom, age) {
        this.email = email;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    isValid() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !!(
            this.email &&
            emailRegex.test(this.email) &&
            this.nom &&
            this.nom.trim() !== "" &&
            this.prenom &&
            this.prenom.trim() !== "" &&
            this.age &&
            this.age >= 13
        );
    }
}

module.exports = User;
