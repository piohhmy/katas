import {expect} from 'chai'
import {chance, yahtzee, pair, threeOfKind, score, fullHouse} from '../yahtzee'

describe('chance', function() {
  it('returns sum of all the dice', function() {
    const roll = [1,2,2,1,1]
    const score = chance(roll)
    expect(score).to.equal(7)
  })
})
describe('yahtzee', () => {
  const tests = [
    {roll: [2,2,2,2,2], expected: 50},
    {roll: [1,2,2,2,2], expected: 0}
  ]
  tests.forEach(test => {
    it(`should return ${test.expected} for roll ${test.roll}`, () => {
        const score = yahtzee(test.roll)
        expect(score).to.equal(test.expected)
    })
  })
})

describe('pair', () => {
  const tests = [
    {roll: [2,2,1,4,5], expected: 4},
    {roll: [2,2,1,4,4], expected: 8},
    {roll: [1,2,3,4,5], expected: 0},
    {roll: [2,3,4,4,4], expected: 0}
  ]
  tests.forEach(test => {
    it(`should return ${test.expected} for roll ${test.roll}`, () => {
        const score = pair(test.roll)
        expect(score).to.equal(test.expected)
      })
  })
})

describe('three-of-a-kind', () => {
  const tests = [
    {roll: [2,2,1,2,5], expected: 6},
    {roll: [1,2,3,4,5], expected: 0},
    {roll: [4,3,4,4,4], expected: 0},
  ]
  tests.forEach(test => {
    it(`should return ${test.expected} for roll ${test.roll}`, () => {
        const score = threeOfKind(test.roll)
        expect(score).to.equal(test.expected)
      })
  })
})

describe('full house', () => {
  const tests = [
    {roll: [2,2,5,5,5], expected: 19},
    {roll: [2,2,2,4,5], expected: 0},
    {roll: [4,3,1,2,4], expected: 0},
  ]
  tests.forEach(test => {
    it(`should return ${test.expected} for roll ${test.roll}`, () => {
        const score = fullHouse(test.roll)
        expect(score).to.equal(test.expected)
      })
  })
})

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

