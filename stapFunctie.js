/* FUNCTIONS */
function stap (z) {
  return z >= 0 ? 1 : 0
}

/* SETUP */
const input = [
    0.123,
    -0.355,
    8,
    1.2,
    -1.3,
    0.99
]

/* OUTPUT */
module.exports = {
  output: function output () {
    input.forEach((z) => console.log(`Input: ${z.toFixed(2)} - Stap function: ${stap(z)}`))
  }
}
