/* OUTPUT */
output('Hoofdstuk 4 - Gradient Descent')
require('./gradientDescent').output()

output('Hoofdstuk 4 - Fitness Functie')
require('./fitnessFunctie').output()

output('Hoofdstuk 4 - Fitness Ratio')
require('./fitnessRatio').output()

output('Hoofdstuk 4 - Roulette Wiel Selection')
require('./rouletteWielSelection').output()

/* UTILS */
function output (title) {
  const l = title.length
  const output = ['', '='.repeat(l), title, '='.repeat(l), ''].join('\n')
  console.log(output)
}
