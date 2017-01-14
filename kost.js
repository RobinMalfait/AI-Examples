/* FUNCTIONS */
function kost (h = () => {}, dataset = []) {
  // 1/2m * sum((h(xi) - yi)^2)
  const m = dataset.length
  return (1 / (2 * m)) * dataset.map(([x, y]) => Math.pow(h(x) - y, 2)).reduce((total, curr) => total + curr, 0)
}

function J (theta0, theta1) {
  return function (x) {
    return theta0 + (theta1 * x)
  }
}

/* SETUP */
const dataset = [
    [1.0, 1.0],
    [2.0, 2.0],
    [3.0, 1.3],
    [4.0, 3.75],
    [5.0, 2.25]
]

/* OUTPUT */
module.exports = {
  output: function output () {

    const thetas = [
      [-0.4, 1],
      [0.785, 0.425]
    ]

    thetas.forEach(([theta0, theta1], i) => {
        console.log('Voorbeeld', i + 1)
        console.log('-----------\n')

        console.log(`Theta0 = ${theta0}`)
        console.log(`Theta1 = ${theta1}`)
        console.log(`Heuristiek = ${theta0} + ${theta1}x`)

        console.log('\nKost', kost(J(theta0, theta1), dataset).toFixed(4))
        console.log('')
    })
  }
}
