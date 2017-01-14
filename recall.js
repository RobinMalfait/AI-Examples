/* FUNCTIONS */
/**
 * De RAPPEL (recall) zegt welk percentage van de positieve voorbeelden
 * ook effectief als positief werd gelabeld door de hypothese.
 * a / (a + c)
 */
// a     = aantal relevant gemarkeerd
// a + c = aantal effectieve tumoren
function recall (a, c) {
  return a / (a + c)
}

/* SETUP */

/* OUTPUT */
module.exports = {
  recall: recall,
  output: function output () {
    const aantalRelevant = 3
    const aantalEffectief = 12

    console.log(recall(aantalRelevant, aantalEffectief))
  }
}
