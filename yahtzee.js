
export function chance(dice) {
  return dice.reduce((a, b) => a + b)
}

export function yahtzee(dice) {
  return new Set(dice).size == 1 ? 50 : 0
}

export function pair(dice) {
  for(let i=0; i<5; i++) {
    for(let j=i+1; j<5; j++) {
      if(dice[i]==dice[j]) {
        return dice[i] * 2 
      }
    }
  }
  return 0
}

export function score(roll, scorer) {
  if(roll.length != 5)
    throw Error("5 dice not rolled")
  return scorer(roll)
}

