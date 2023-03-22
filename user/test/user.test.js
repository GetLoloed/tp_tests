const assert = require("assert");
const User = require("../User");

describe("User", function() {
    describe("#isValid()", function() {
        it("devrait retourner false si l'email est manquant", function() {
            const user = new User("", "Doe", "John", 25);
            assert.strictEqual(user.isValid(), false);
        });

        it("devrait retourner false si l'email n'a pas un format valide", function() {
            const user = new User("john.doe@", "Doe", "John", 25);
            assert.strictEqual(user.isValid(), false);
        });

        it("devrait retourner false si le nom est manquant", function() {
            const user = new User("john.doe@example.com", "", "John", 25);
            assert.strictEqual(user.isValid(), false);
        });

        it("devrait retourner false si le prénom est manquant", function() {
            const user = new User("john.doe@example.com", "Doe", "", 25);
            assert.strictEqual(user.isValid(), false);
        });

        it("devrait retourner false si l'âge est inférieur à 13 ans", function() {
            const user = new User("john.doe@example.com", "Doe", "John", 12);
            assert.strictEqual(user.isValid(), false);
        });

        it("devrait retourner true si toutes les propriétés sont valides", function() {
            const user = new User("john.doe@example.com", "Doe", "John", 13);
            assert.strictEqual(user.isValid(), true);
        });
    });
});
