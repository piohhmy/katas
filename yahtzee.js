import {expect} from 'chai'

function chance(dice) {
  return dice.reduce((a, b) => a + b)
}

function yahtzee(dice) {
  return new Set(dice).size == 1 ? 50 : 0
  let d1 = dice.pop()
  for(let d of dice) {
    if (d != d1)
      return 0
  }
 return 50 
}

function score(roll, scorer) {
  if(roll.length != 5)
    throw Error("5 dice not rolled")
  return scorer(roll)
}

describe('score', ()=> {
  it('should thow exception if less than 5 dice are rolled', () => {
    expect(score.bind([1,2], dice=>0)).to.throw(Error)
  })
  it('should thow exception if less than 5 dice are rolled', () => {
    expect(score.bind([1,2,3,4,5,6], dice=>0)).to.throw(Error)
  })
  it('should evaluate the roll with scorer when 5 dice are rolled', () => {
    expect(score([1,2,3,4,5], dice=>2)).to.equal(2)
  })
})

describe('chance', function() {
  it('should return sum of all the dice', function() {
    let actualScore = chance([1,2,2,1,1])
    expect(actualScore).to.equal(7)
  })
})
describe('yahtzee', () => {
  context('when all dice have same value', () => {
    it('return 50', () => {
      let actualScore = yahtzee([2,2,2,2,2])
      expect(actualScore).to.equal(50)
    })
  })
  context('when dice have different values', () => {
    it('returns 0', () => {
      let actualScore = yahtzee([1,2,2,2,2])
      expect(actualScore).to.equal(0)
    })
  })
})
