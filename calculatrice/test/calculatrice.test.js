const assert = require("assert");
const { additionner, soustraire, multiplier, diviser } = require("../calculatrice");

describe("Calculatrice", () => {
    describe("additionner", () => {
        it("devrait retourner la somme de deux nombres", () => {
            assert.strictEqual(additionner(2, 3), 5);
            assert.strictEqual(additionner(0, 0), 0);
            assert.strictEqual(additionner(-1, 1), 0);
            assert.strictEqual(additionner(-1.5, 2.5), 1);
        });
    });

    describe("soustraire", () => {
        it("devrait retourner la différence entre deux nombres", () => {
            assert.strictEqual(soustraire(5, 2), 3);
            assert.strictEqual(soustraire(0, 0), 0);
            assert.strictEqual(soustraire(1, -1), 2);
            assert.strictEqual(soustraire(-1.5, 2.5), -4);
        });
    });

    describe("multiplier", () => {
        it("devrait retourner le produit de deux nombres", () => {
            assert.strictEqual(multiplier(2, 3), 6);
            assert.strictEqual(multiplier(0, 5), 0);
            assert.strictEqual(multiplier(-1, -1), 1);
            assert.strictEqual(multiplier(-1.5, 2.5), -3.75);
        });
    });

    describe("diviser", () => {
        it("devrait retourner le quotient de deux nombres", () => {
            assert.strictEqual(diviser(6, 3), 2);
            assert.strictEqual(diviser(0, 5), 0);
            assert.strictEqual(diviser(-1, -1), 1);
            assert.strictEqual(diviser(-1.5, 0.5), -3);
            assert.strictEqual(diviser(-1.5, -0.5), 3);
        });

        it("devrait lever une erreur lors de la division par zéro", () => {
            assert.throws(() => {
                diviser(2, 0);
            }, /Impossible de diviser par zéro/);
        });
    });
});
