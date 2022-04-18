# General
NodeJS CLI package that aggregates, compile, minify and obfuscates web assets using cli with arguments.<br />
Ideal for use within your npm module within "scripts" as "postbuild" or during DevOps CI process allowing you:
a. Secure your assets within server-side or docker image.
b. Prepare and secure static files for server-side rendering for web-applications, mobile, etc.

## Overview
Web Assets are TypeScript, JavaScript & style sheets: .SCSS, .CSS files. 

Using this package, you can aggregate, minify & obfuscate .js output file. <br />
Using this package, you can aggregate, compile & minify .css output file.

## Example to .js, .ts files aggregation, minification & obfuscation
### Adding script to  package.json file
```
...
"scripts": {
  ...
  "generate": "web-assets-aggregator generate --output js --target aggregate.js --sources source1.js source2.ts",
  "build": your build original implementation,
  "postbuild": "npm run generate"
}
...
```
### Command
```
npm run generate
```
or create "post" script to make use life cycle scripts events. Example:
```
npm run build
```

#### source1.js
```
/**
 * Comment for test source file
 */
console.log('this is a javascript test');  
```
#### source2.ts
```
/**
 * Comment for test source file
 */
console.log('this is a typescript test');
```


#### Output file "aggregate.js" (aggregated, minified & obfuscated)
```
'use strict';var a0_0x4fa252=a0_0x4689;function a0_0x16bc(){var _0x26c26c=['2744154BgKURx','log','3241651cecBlL','6PXruGz','10mJLTkN','1jvIVJn','2044308GUqKqd','33344223uehEBP','5112582iDzjgH','4885115SUWgWr','2509454xMqJnX','8hbiAcT'];a0_0x16bc=function(){return _0x26c26c;};return a0_0x16bc();}(function(_0x111e9b,_0x1dd149){var _0xbe7b5d=a0_0x4689,_0x3803dd=_0x111e9b();while(!![]){try{var _0x202d85=parseInt(_0xbe7b5d(0x78))/0x1*(-parseInt(_0xbe7b5d(0x7d))/0x2)+parseInt(_0xbe7b5d(0x76))/0x3*(-parseInt(_0xbe7b5d(0x79))/0x4)+parseInt(_0xbe7b5d(0x7c))/0x5+-parseInt(_0xbe7b5d(0x7b))/0x6+-parseInt(_0xbe7b5d(0x75))/0x7*(parseInt(_0xbe7b5d(0x7e))/0x8)+parseInt(_0xbe7b5d(0x7f))/0x9+parseInt(_0xbe7b5d(0x77))/0xa*(parseInt(_0xbe7b5d(0x7a))/0xb);if(_0x202d85===_0x1dd149)break;else _0x3803dd['push'](_0x3803dd['shift']());}catch(_0x45f4a3){_0x3803dd['push'](_0x3803dd['shift']());}}}(a0_0x16bc,0xb00ff));function a0_0x4689(_0x9cf05c,_0x3b818c){var _0x16bcfa=a0_0x16bc();return a0_0x4689=function(_0x46898b,_0xfe005f){_0x46898b=_0x46898b-0x75;var _0x44adb6=_0x16bcfa[_0x46898b];return _0x44adb6;},a0_0x4689(_0x9cf05c,_0x3b818c);}console[a0_0x4fa252(0x80)](0xf),console['log'](0x10);
```

## How To Run it for .js file output?
web-assets-aggregator generate --output js --target [target file] --sources [list of .js/.ts sources separated with space]
### Example
- Example using files: web-assets-aggregator generate --output js --target ./dist/aggregated.js --sources ./example_sources/ts-and-js/a.ts ./example_sources/ts-and-js/b.ts ./example_sources/ts-and-js/c.js
- Example using * wildcard: web-assets-aggregator generate --output js --target ./dist/aggregated.js --sources ./example_sources/ts-and-js/\*.ts ./example_sources/ts-and-js/\*.js

## How To Run it for .css file output?
web-assets-aggregator generate --output css --target [target file] --sources [list of .scss/.css sources separated with space]
### Example
- Example using files: web-assets-aggregator generate --output css --target ./dist/aggregated.min.css --sources ./example_sources/scss-and-css/a.scss ./example_sources/scss-and-css/b.scss ./example_sources/scss-and-css/c.css
- Example using * wildcard: web-assets-aggregator generate --output css --target ./dist/aggregated.min.css --sources ./example_sources/scss-and-css/\*.scss ./example_sources/scss-and-css/\*.css

## License
BSD2 License (since, 3rd party is BSD2-Clause)
