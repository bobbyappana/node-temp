
const _ = require('lodash')

const Arr = [1, [2, [3, [4]]]]

const destructure = _.flattenDeep(Arr)

console.log(destructure);