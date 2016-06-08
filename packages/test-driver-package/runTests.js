console.warn('runTests.js')

export const Tests = []
export const runTests = () => {
  console.warn('was called to run tests:', Tests)
  Tests.forEach(t => t())
}
