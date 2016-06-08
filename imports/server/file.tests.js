console.warn('file.tests.js')

import fs from 'fs'
import { Tests } from 'meteor/test-driver-package'

Tests.push(() => {
  console.log('IS SERVER', Meteor.isServer)
  console.log(Object.getOwnPropertyNames(fs))
})
