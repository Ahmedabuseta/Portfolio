const path = require("path")
module.exports = {

    entry : '.src/index.js',
    output : {
        path:path.resolve.apply(__direname,'dist')
    }
}