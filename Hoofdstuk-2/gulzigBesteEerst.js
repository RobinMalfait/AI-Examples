const { table } = require('../utils')

/* FUNCTIONS */
const closed = []
let open = []
let path = []

/**
 * Maakt zijn keuze: f = h (Hoever we nog denken dat het is)
 * Kan compleet zijn, maar niet gegarandeerd
 */
function uniformCostSearch (start, target) {
  let city = findCityByName(start)
  let h = city.heuristicDistance || 0

  /**
   * Markeer de huidige stad als geexpandeerd
   */
  closed.push(city.name)
  open = open.filter(openCity => openCity.name !== city.name)

  /**
   * Is de huidige stad het target?
   */
  if (start === target) {
    /**
     * Het pad opbouwen via de 'parent'
     */
    let prev = findCityByName(target)
    path.push(prev.name)
    while (prev.parent !== undefined) {
      path.push(prev.parent.name)
      prev = prev.parent
    }

    /**
     * Path omdraaien omdat we nu van onder -> boven zijn gegaan
     */
    path = path.reverse()
    return
  }

  console.log(`${start}(${h}) = ${h}`)

  /**
   * Overloop alle buren
   */
  city.connections.forEach(({ name }) => {
    /**
     * Is de buur al geexpandeerd, negeer hem dan!
     */
    if (closed.includes(name)) {
      console.log(`${name} is al geexpandeerd`)
      return
    }

    /**
     * Verkrijg het hele city object, ipv de naam
     */
    const neighbor = findCityByName(name)

    /**
     * Zet de lengte tot de vorige stad er bij
     */
    Object.assign(neighbor, {
      parent: city
    })

    /**
     * Zet de nog niet geexpandeerde buur op de open lijst
     */
    open.push(neighbor)
  })

  /**
   * Zoek de volgende stad om te expanderen
   */
  let nextCity = { heuristicDistance: Infinity }
  open.forEach(city => {
    if (city.heuristicDistance < nextCity.heuristicDistance) {
      nextCity = city
    }
  })

  if (nextCity.totalDistance !== Infinity) {
    uniformCostSearch(nextCity.name, target)
  }
}

/* SETUP */
const data = require('./__map')

const start = 'Arad'
const target = 'Bucharest'

/* OUTPUT */
module.exports = {
  output: function output () {
    const title = `From: ${start} - To: ${target}`
    console.log([title, '-'.repeat(title.length)].join('\n'))

    uniformCostSearch(start, target)

    console.log(`\nClosed list:`)
    console.log(table(closed))
    console.log('\nPath:')
    console.log(table(path, {
      chars: { middle: '>' }
    }))
  }
}

/* UTILS */
function findCityByName (name) {
  return data.find(city => city.name === name)
}
