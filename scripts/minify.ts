const fs = require('fs');
const path = require('path');
const UglifyJS = require('uglify-js');

const inputPatch = path.join(__dirname, '..', 'index.js');
const input = fs.readFileSync(inputPatch, 'utf8');
const { error, code } = UglifyJS.minify(input);

if (error) {
  console.error(error);
} else {
  fs.writeFileSync(inputPatch, code);
  console.log('Minify Done!');
}
