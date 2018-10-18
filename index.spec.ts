import { expect } from 'chai'
import 'mocha'
import { Petter, STYRKA } from './index'

const STARK_SOM_TVÅ = STYRKA * 2

describe('Petter', () => {
  let petter = new Petter()

  beforeEach(() => {
    petter = new Petter()
  })

  it('borde ha en röd get', () => {
    expect(petter.röd).to.match(/.*\*smask\* mmm...smör! \*smask\*.*/)
    expect(petter.röd).to.match(/.*\*smask\* mmm...bröd! \*smask\*.*/)
  })

  it('borde ha en blå get', () => {
    expect(petter.blå.styrka).to.be.greaterThan(STARK_SOM_TVÅ)
  })

  it('borde ha en gul get', () => {
    const orignalDate = Date

    class InteJulafonDate {
      getMonth () { return 2 }
      getDate () { return 7 }
    }

    class JulaftonDate {
      getMonth () { return 11 }
      getDate () { return 24 }
    }

    ;(Date as any) = InteJulafonDate
    expect(petter.gul).to.equal('Nu åker jag inte å lämnar paket till alla snälla barn!')
    ;(Date as any) = orignalDate

    ;(Date as any) = JulaftonDate
    expect(petter.gul).to.equal('Nu åker jag å lämnar paket till alla snälla barn!')
    ;(Date as any) = orignalDate
  })

  it('borde ha en vit get', () => {
    expect(petter.vit).to.match(/.*\*smask\*.*\*smask\*.*/)
  })
})
