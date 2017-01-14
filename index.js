/* OUTPUT */
output('Hoofdstuk 4 - Gradient Descent')
require('./gradientDescent').output()

output('Hoofdstuk 4 - Fitness Functie')
require('./fitnessFunctie').output()

output('Hoofdstuk 4 - Fitness Ratio')
require('./fitnessRatio').output()

output('Hoofdstuk 4 - Roulette Wiel Selection')
require('./rouletteWielSelection').output()

output('Hoofdstuk 4 - Recombinatie en Mutatie')
require('./recombinatieEnMutatie').output()

output('Hoofdstuk 5 - Gemiddelde Kwadratische Afwijking')
require('./gemiddeldeKwadratischeAfwijking').output()

output('Hoofdstuk 5 - Precisie')
require('./precisie').output()

output('Hoofdstuk 5 - Recall')
require('./recall').output()

output('Hoofdstuk 5 - F-SCORE')
require('./fScore').output()

/* UTILS */
function output (title) {
  const l = title.length + 4
  const output = ['', '='.repeat(l), `| ${title} |`, '='.repeat(l), ''].join('\n')
  console.log(output)
}
