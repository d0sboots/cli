const log = require('../utils/log-shim.js')
const envPath = require('../utils/path.js')
const BaseCommand = require('../base-command.js')

class Bin extends BaseCommand {
  static description = 'Display npm bin folder'
  static name = 'bin'
  static params = ['global']
  static ignoreImplicitWorkspace = true

  async exec (args) {
    const b = this.npm.bin
    this.npm.output(b)
    if (this.npm.config.get('global') && !envPath.includes(b)) {
      log.error('bin', '(not in PATH env variable)')
    }
  }
}
module.exports = Bin
