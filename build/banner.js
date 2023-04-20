'use strict'

const pkg = require('../package.json')

const year = new Date().getFullYear()

function getBanner(pluginFilename) {
  return `/*!
  * SuperStrap${pluginFilename ? ` ${pluginFilename}` : ''} v${pkg.version} (${pkg.homepage})
  * Copyright ${year} ${pkg.author}
  * Licensed under MIT (https://github.com/gtoy1118/superstrap/blob/main/LICENSE)
  */`
}

module.exports = getBanner
