const Web3 = require('@theqrl/web3')
import { hashPersonalMessage } from '@ethereumjs/util'
const Personal = require('web3-eth-personal')

class NodeProvider {
  constructor (executionContext, config) {
    this.executionContext = executionContext
    this.config = config
  }

  getAccounts (cb) {
    if (this.config.get('settings/personal-mode')) {
      return this.executionContext.web3().zond.personal.getAccounts(cb)
    }
    return this.executionContext.web3().zond.getAccounts(cb)
  }

  newAccount (passwordPromptCb, cb) {
    if (!this.config.get('settings/personal-mode')) {
      return cb('Not running in personal mode')
    }
    passwordPromptCb((passphrase) => {
      this.executionContext.web3().zond.personal.newAccount(passphrase, cb)
    })
  }

  resetEnvironment () {
     /* Do nothing. */
  }

  getBalanceInEther (address, cb) {
    this.executionContext.web3().zond.getBalance(address, (err, res) => {
      if (err) {
        return cb(err)
      }
      cb(null, Web3.utils.fromWei(res.toString(10), 'ether'))
    })
  }

  getGasPrice (cb) {
    this.executionContext.web3().zond.getGasPrice(cb)
  }

  signMessage (message, account, passphrase, cb) {
    const messageHash = hashPersonalMessage(Buffer.from(message))
    try {
      const personal = new Personal(this.executionContext.web3().currentProvider)
      personal.sign(message, account, passphrase, (error, signedData) => {
        cb(error, '0x' + messageHash.toString('hex'), signedData)
      })
    } catch (e) {
      cb(e.message)
    }
  }

  getProvider () {
    return this.executionContext.getProvider()
  }
}

module.exports = NodeProvider
