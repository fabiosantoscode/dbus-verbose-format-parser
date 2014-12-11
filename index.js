var fs = require('fs')
var path = require('path')
var PEG = require('pegjs')
var parser = PEG.buildParser(fs.readFileSync(path.join(__dirname, 'verbose-format.peg'), { encoding: 'utf-8'}))

module.exports = parser.parse.bind(parser);

