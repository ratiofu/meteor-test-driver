Package.describe({
  name: 'test-driver-package',
  version: '0.0.1',
  summary: '',
  git: 'https://github.com/tjconsult/meteor-test-driver.git',
  documentation: 'README.md',
  testOnly: true
})

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4')
  api.use('ecmascript')
  api.mainModule('runTests.js')
  api.export('runTests')
})

Package.onTest(function(api) {
  api.use('ecmascript')
  api.use('test-driver-package')
  api.mainModule('runTests.js')
  api.export('runTests')
})
