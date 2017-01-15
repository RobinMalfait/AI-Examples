/* OUTPUT */
output('Hoofdstuk 2 - A*')
require('./Hoofdstuk-2/aStar').output()

output('Hoofdstuk 2 - Uniform Cost Search')
require('./Hoofdstuk-2/uniformCostSearch').output()

output('Hoofdstuk 2 - Gulzig Beste Eerst')
require('./Hoofdstuk-2/gulzigBesteEerst').output()

output('Hoofdstuk 4 - Gradient Descent')
require('./Hoofdstuk-4/gradientDescent').output()

output('Hoofdstuk 4 - Fitness Functie')
require('./Hoofdstuk-4/fitnessFunctie').output()

output('Hoofdstuk 4 - Fitness Ratio')
require('./Hoofdstuk-4/fitnessRatio').output()

output('Hoofdstuk 4 - Roulette Wiel Selection')
require('./Hoofdstuk-4/rouletteWielSelection').output()

output('Hoofdstuk 4 - Recombinatie en Mutatie')
require('./Hoofdstuk-4/recombinatieEnMutatie').output()

output('Hoofdstuk 5 - Gemiddelde Kwadratische Afwijking')
require('./Hoofdstuk-5/gemiddeldeKwadratischeAfwijking').output()

output('Hoofdstuk 5 - Precisie')
require('./Hoofdstuk-5/precisie').output()

output('Hoofdstuk 5 - Recall')
require('./Hoofdstuk-5/recall').output()

output('Hoofdstuk 5 - F-SCORE')
require('./Hoofdstuk-5/fScore').output()

output('Hoofdstuk 6 - Kostfunctie')
require('./Hoofdstuk-6/kost').output()

output('Hoofdstuk 6 - Sigmoid function')
require('./Hoofdstuk-6/sigmoidFunction').output()

output('Hoofdstuk 6 - Stapfunctie')
require('./Hoofdstuk-6/stapFunctie').output()

output('Hoofdstuk 6 - één-vs-allen')
require('./Hoofdstuk-6/eenVsAllen').output()

output('Hoofdstuk 6 - Neural Network (XOR)')
require('./Hoofdstuk-6/neuralNetwork').output()

/* UTILS */
function output (title) {
  const l = title.length + 4
  const output = ['', '='.repeat(l), `| ${title} |`, '='.repeat(l), ''].join('\n')
  console.log(output)
}
