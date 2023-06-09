const init = {
  overrideWeb3: function (web3, web3Override) {
    web3.zond.getCode = web3Override.getCode
    web3.debug.traceTransaction = web3Override.traceTransaction
    web3.debug.storageRangeAt = web3Override.storageRangeAt
    web3.zond.getTransaction = web3Override.getTransaction
    web3.zond.getTransactionFromBlock = web3Override.getTransactionFromBlock
    web3.zond.getBlockNumber = web3Override.getBlockNumber
  },

  readFile: function (filename, callback) {
    const fs = require('fs')
    try {
      console.log('reading ' + filename)
      if (callback) {
        fs.readFile(filename, 'utf8', callback)
      } else {
        return fs.readFileSync(filename, 'utf8')
      }
    } catch (e) {
      console.log(e)
      if (callback) {
        callback(e)
      } else {
        return e
      }
    }
  }
}

module.exports = init
