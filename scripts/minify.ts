const fs = require('fs');
const path = require('path');
const UglifyJS = require('uglify-js');

const inputPath = path.join(__dirname, '..', 'index.js');
const input = fs.readFileSync(inputPath, 'utf8');
const { error, code } = UglifyJS.minify(input);

if (error) {
  console.error(error);
} else {
  fs.writeFileSync(inputPath, code);
  console.log('Minify Done!');
}
