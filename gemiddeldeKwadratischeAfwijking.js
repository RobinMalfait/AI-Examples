/* FUNCTIONS */
function gemiddeldeKwadratischeAfwijking (h = () => {}, dataset = []) {
  // 1/m * sum((h(xi) - yi)^2)
  const m = dataset.length
  return (1 / m) * dataset.map(([x, y]) => Math.pow(h(x) - y, 2)).reduce((total, curr) => total + curr, 0)
}

function h (x) {
  // Heuristiek, voorbeeld
  const roundNumber = x * 10
  if (roundNumber % 5 === 0) {
    return 1
  } else if (roundNumber % 2 === 0) {
    return 2
  }
  return 3
}

/* SETUP */
const dataset = [
  [0.2, 1], // X (data), Y (label)
  [0.8, 2],
  [0.3, 3]
]

/* OUTPUT */
module.exports = {
  output: function output () {
    console.log(gemiddeldeKwadratischeAfwijking(h, dataset))
  }
}
