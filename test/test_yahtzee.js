import {expect} from 'chai'
import {chance, yahtzee, pair, threeOfKind, score, fullHouse} from '../yahtzee'

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
  const scorer = chance
  it('returns sum of all the dice', function() {
    const roll = [1,2,2,1,1]
    const score = scorer(roll)
    expect(score).to.equal(7)
  })
})
describe('yahtzee', () => {
  const scorer = yahtzee
  context('when found, all dice have same value', () => {
    it('return 50', () => {
      const roll = [2,2,2,2,2]
      const score = scorer(roll)
      expect(score).to.equal(50)
    })
  })
  context('when not found, dice have different values', () => {
    it('returns 0', () => {
      const roll = [1,2,2,2,2]
      const score = scorer(roll)
      expect(score).to.equal(0)
    })
  })
})
describe('pair', () => {
  const scorer = pair
  context('when pair is found', () => {
    it('returns sum of pair', () => {
      const roll = [2,2,1,4,5]
      const score = scorer(roll)
      expect(score).to.equal(4)
    })
    it('returns sum of biggest  of pair', () => {
      const roll = [2,2,1,4,4]
      const score = scorer(roll)
      expect(score).to.equal(8)
    })
  })
  context('when not found', () => {
    it('returns 0 no pairs', () => {
      const roll = [1,2,3,4,5]
      const score = scorer(roll)
      expect(score).to.equal(0)
    })
    it('returns 0 on 3-of-a-kind', () => {
      const roll = [2,3,4,4,4]
      const score = scorer(roll)
      expect(score).to.equal(0)
    })
  })
})
describe('three-of-a-kind', () => {
  const scorer = threeOfKind
  context('when found', () => {
    it('returns sum', () => {
      const roll = [2,2,1,2,5]
      const score = scorer(roll)
      expect(score).to.equal(6)
    })
  })
  context('when not found', () => {
    it('returns 0 on no 3-of-a-kind', () => {
      const roll = [1,2,3,4,5]
      const score = scorer(roll)
      expect(score).to.equal(0)
    })
    it('returns 0 on 4-of-a-kind', () => {
      const roll = [4,3,4,4,4]
      const score = scorer(roll)
      expect(score).to.equal(0)
    })
  })
})
describe('full house', () => {
  const scorer = fullHouse 
  context('when found', () => {
    it('returns sum of all dice', () => {
      const roll = [2,2,5,5,5]
      const score = scorer(roll)
      expect(score).to.equal(19)
    })
  })
  context('when not found', () => {
    it('returns 0 on just 3-of-a-kind', () => {
      const roll = [2,2,2,4,5]
      const score = scorer(roll)
      expect(score).to.equal(0)
    })
    it('returns 0 on just pair', () => {
      const roll = [4,3,1,2,4]
      const score = scorer(roll)
      expect(score).to.equal(0)
    })
  })
})
