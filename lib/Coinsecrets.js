const debug = require('debug')('coinsecrets')
const fetch = require('node-fetch')
const v1 = require('./v1')

const NETWORKS = ['mainnet', 'testnet']

class Coinsecrets {
  constructor ({network = 'mainnet'} = {}) {
    if (!NETWORKS.includes(network)) throw new Error(`network must be one of: ${NETWORKS.join(', ')}`)
    this.opts = {
      network
    }
    this.Api = v1(this.opts)
    debug('Using Coinsecrets.org API version:', this.Api.VERSION)
    return this
  }

  block (blk) {
    debug(`Called .block(${blk})`)
    if (typeof blk !== 'number') throw new Error('.block() accepts just Number.')
    let endpoint = `${this.Api.BLOCK}/${blk}`
    return fetch(endpoint)
      .then(res => res.json())
  }

  mempool () {
    debug('Called .mempool()')
    let endpoint = `${this.Api.MEMPOOL}`
    return fetch(endpoint)
      .then(res => res.json())
  }

  version () {
    return this.Api.VERSION
  }
}

module.exports = Coinsecrets
