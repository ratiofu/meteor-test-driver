console.warn('runTests.js')

Meteor.methods({
  runTests() {
    Tests.forEach(t => t())
  }
})

export const Tests = []
export const runTests = () => {
  console.warn('was called to run tests:', Tests)
  Tests.forEach(t => t())
  Meteor.call('runTests')
}
