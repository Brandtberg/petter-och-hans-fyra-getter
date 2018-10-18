type Mat = 'smör' | 'bröd'

export const STYRKA = 1

export class Petter {
  get röd () {
    return ätMat('smör', 'bröd')
  }

  get blå () {
    return { styrka: STYRKA * 3 }
  }

  get gul () {
    return julbocka()
  }

  get vit () {
    const vadSomHelst = Math.random().toString(36).replace(/[^a-z]+/g, '')
    return ät(vadSomHelst)
  }
}

function ätMat (...mat: Mat[]) {
  return ät(...mat)
}

function ät (...vadSomHelst: string[]) {
  return vadSomHelst.map((i) => `*smask* mmm...${i}! *smask*`).join('\n')
}

function julbocka () {
  return detÄrJulafton()
    ? 'Nu åker jag å lämnar paket till alla snälla barn!'
    : 'Nu åker jag inte å lämnar paket till alla snälla barn!'
}

function detÄrJulafton () {
  const detÄrDecember  = (new Date()).getMonth() === 11
  const detÄr24e = (new Date()).getDate() === 24
  return detÄrDecember && detÄr24e
}
