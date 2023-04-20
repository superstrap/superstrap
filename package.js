// package metadata file for Meteor.js

/* eslint-env meteor */

Package.describe({
  name: 'gtoy1118:superstrap', // https://atmospherejs.com/twbs/bootstrap
  summary: 'The most popular front-end framework for developing responsive, mobile first projects on the web.',
  version: '1.0.0',
  git: 'https://github.com/gtoy1118/superstrap.git'
})

Package.onUse(api => {
  api.versionsFrom('METEOR@1.0')
  api.addFiles([
    'dist/css/superstrap.css',
    'dist/js/bootstrap.js'
  ], 'client')
})
