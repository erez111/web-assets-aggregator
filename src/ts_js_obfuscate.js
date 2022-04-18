// ts_js_obfuscate.js allows to obfuscate via code

// You can set this file for obfuscation via js code or use prepared cli command, which runs from package.json scripts.

const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');

fs.readFile('./dist/aggregated.js', { encoding: 'utf-8' }, (err, data) => {
  const obfuscationResult = JavaScriptObfuscator.obfuscate(
    data,
  );
  const result = obfuscationResult.getObfuscatedCode();
  // eslint-disable-next-line no-shadow
  fs.writeFile('./dist/aggregated_and_obfuscated.js', result, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Finished obfuscation');
  });
});
