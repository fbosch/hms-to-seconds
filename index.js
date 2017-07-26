'use strict'
module.exports = input => {
  if (typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`)
  }

  const split = input.split(':')
  let seconds = 0, minutes = 1
  while (split.length > 0) {
    seconds += minutes * parseInt(split.pop(), 10)
    minutes *= 60
  }
  return seconds
}
