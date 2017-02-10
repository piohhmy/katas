import {expect} from 'chai'
import {chance, yahtzee, pair, score} from '../yahtzee'

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
describe('pair', () => {
  context('when pair is found', () => {
    it('returns sum of pair', () => {
      let actualScore = pair([2,2,1,4,5])
      expect(actualScore).to.equal(4)
    })
  })
  context('when pair is not found', () => {
    it('returns 0', () => {
      let actualScore = pair([1,2,3,4,5])
      expect(actualScore).to.equal(0)

    })
  })
})