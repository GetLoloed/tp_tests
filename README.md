# TP Tests unitaires

Ce projet contient des exemples de tests unitaires pour différentes classes et fonctions. Les tests sont écrits en
utilisant le framework de tests Mocha.

## Installation

Pour installer les dépendances du projet, exécutez la commande suivante :

        npm install

## Exécution des tests

Vous pouvez exécuter tous les tests du projet en utilisant la commande suivante :

        npm test-all

Vous pouvez également exécuter les tests pour chaque module individuellement en utilisant les commandes suivantes :

        npm run test-<module>

le <module> peut prendre les valeurs suivantes :

- `test-calculatrice` pour les tests de la classe `Calculatrice`
- `test-user` pour les tests de la classe `User`
- `test-hippopotamus` pour les tests de la classe `Hippopotamus`

Si vous souhaitez exécuter tous les tests pour chaque module individuellement, vous pouvez utiliser la commande
suivante :

- `npm run test-all` pour exécuter tous les tests pour chaque module individuellement


