# coinsecrets [![NPM Version](https://img.shields.io/npm/v/coinsecrets.svg)](https://www.npmjs.com/package/coinsecrets) ![node](https://img.shields.io/node/v/coinsecrets.svg) [![Dependency Status](https://david-dm.org/roccomuso/coinsecrets.png)](https://david-dm.org/roccomuso/coinsecrets) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Node.js unofficial client to Coinsecrets.org - Recent Metadata in the Bitcoin Blockchain

[Coinsecrets.org](https://coinsecrets.org) lists metadata recently embedded in the bitcoin blockchain using `OP_RETURN` outputs.

## Install

> npm install --save coinsecrets

## Usage

```javascript
const Coinsecrets = require('coinsecrets')
let cs = new Coinsecrets({ network: 'mainnet' }) // or testnet

cs.block(353197)
  .then(console.log)
  .catch(console.error)

cs.mempool()
  .then(console.log)
  .catch(console.error)

```

### Methods

- `block(<Number>)`: Get a block op_returns scripts.
- `mempool()`: Get op_returns tx in the mempool.
- `version()`: Get API version.

## Debug

To enable debug set the env var `DEBUG=coinsecrets`

# Author

Rocco Musolino ([@roccomuso](https://twitter.com/roccomuso))

# License

MIT
