const assert = require('assert');
const Hippopotamus = require('../Hippopotamus');

describe('Hippopotamus', function() {
    describe('#fight()', function() {
        it('devrait déterminer correctement le vainqueur d\'un combat entre deux hippopotames', function() {
            const hippo1 = new Hippopotamus("Harry", 1500, 20);
            const hippo2 = new Hippopotamus("Hannah", 2000, 25);

            assert.strictEqual(hippo1.tusksSize, 20);
            assert.strictEqual(hippo2.tusksSize, 25);

            const fightResult = hippo1.fight(hippo2);
            assert.strictEqual(fightResult, "Hannah a gagné le combat contre Harry !");
        });
    });

    describe('cycle de vie', function() {
        it('devrait afficher l\'état de l\'hippopotame chaque soir pendant 3 semaines', function() {
            const hippo = new Hippopotamus("Henry", 1800, 22);

            // Cycle de vie de l'hippopotame
            for (let jour = 1; jour <= 21; jour++) {
                console.log(`Jour ${jour}: ${hippo.toString()}`);

                // Appel à la méthode eat() deux fois
                hippo.eat();
                hippo.eat();

                // Appel à la méthode swim() trois fois toutes les heures
                for (let heure = 1; heure <= 24; heure++) {
                    hippo.swim();
                    hippo.swim();
                    hippo.swim();
                }
            }
        });
    });
});
