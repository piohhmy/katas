
export function chance(dice) {
  return dice.reduce((a, b) => a + b)
}

export function yahtzee(dice) {
  return new Set(dice).size == 1 ? 50 : 0
}

function calcPipFrequency(dice) {
  var counter = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0}
  for(let die of dice) {
    counter[die] += 1
  }
  return counter
}

export function pair(dice) {
  var pipFreq = calcPipFrequency(dice)
  let pairs = Object.keys(pipFreq).filter(pip=>pipFreq[pip] >= 2)
  return pairs.length > 0 ? Math.max(...pairs) * 2 : 0

  for(let pip in pipFreq) {
    if(pipFreq[pip] >= 2) {
      return pipFreq[pip] * 2
     }
  }
  return 0
}

export function score(roll, scorer) {
  if(roll.length != 5)
    throw Error("5 dice not rolled")
  return scorer(roll)
}

