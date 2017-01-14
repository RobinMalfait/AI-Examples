/* FUNCTIONS */
/**
 * De PRECISIE ezgt welk percentage van de voorbeelden die voorspeld waren
 * als positief ook effectief positief waren.
 *
 * a / (a + b)
 */

// a     = aantal effectief juist
// a + b = aantal met antwoord 1
function precisie (a, b) {
  return a / (a + b)
}

/* SETUP */

/* OUTPUT */
module.exports = {
  precisie: precisie,
  output: function output () {
    const aantalEffectiefJuist = 3
    const aantalMetAntwoord1 = 12

    console.log(precisie(aantalEffectiefJuist, aantalMetAntwoord1))
  }
}
