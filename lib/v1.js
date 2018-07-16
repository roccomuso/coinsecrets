
const MAINNET = 'http://api.coinsecrets.org'
const TESTNET = 'http://api-testnet.coinsecrets.org'

module.exports = ({network = 'mainnet'} = {}) => {
  let host = network === 'testnet' ? TESTNET : MAINNET
  return {
    VERSION: 'v1',
    BLOCK: `${host}/block`,
    MEMPOOL: `${host}/mempool`
  }
}
