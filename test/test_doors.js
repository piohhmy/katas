import {expect} from 'chai'

function toggleDoors(doors, skip) {

  return [true, true, true]
}

describe('toggle doors', ()=> {
  it('should toggle every door with skip=0', ()=> {
    let doors = [false, false, false]
    let skip = 0
    let newDoors = toggleDoors(doors, skip)
    expect(newDoors).to.deep.equal([true, true, true])
  }) 
})
