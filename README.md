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
function a0_0x1796(){var _0x10d19a=['16179218hCTWeu','2212ebcpRo','log','130YJkYIw','7012srsEnx','299536gguqUi','3018Vnzdaj','344529hLAlUs','this\x20is\x20a\x20javascript\x20test','1616334rGyban','4482488tNivvh','4sWyjfG','1495XsRgmA'];a0_0x1796=function(){return _0x10d19a;};return a0_0x1796();}var a0_0x52dd41=a0_0x8421;function a0_0x8421(_0x4809ec,_0xedc820){var _0x1796df=a0_0x1796();return a0_0x8421=function(_0x8421f3,_0x136bc0){_0x8421f3=_0x8421f3-0xdf;var _0x2de7df=_0x1796df[_0x8421f3];return _0x2de7df;},a0_0x8421(_0x4809ec,_0xedc820);}(function(_0x254b6b,_0x493a3d){var _0x52e08b=a0_0x8421,_0x24d5d5=_0x254b6b();while(!![]){try{var _0x29746f=parseInt(_0x52e08b(0xe1))/0x1*(parseInt(_0x52e08b(0xe7))/0x2)+-parseInt(_0x52e08b(0xe5))/0x3+parseInt(_0x52e08b(0xe0))/0x4*(parseInt(_0x52e08b(0xe8))/0x5)+-parseInt(_0x52e08b(0xe2))/0x6*(-parseInt(_0x52e08b(0xea))/0x7)+parseInt(_0x52e08b(0xe6))/0x8+parseInt(_0x52e08b(0xe3))/0x9*(parseInt(_0x52e08b(0xdf))/0xa)+-parseInt(_0x52e08b(0xe9))/0xb;if(_0x29746f===_0x493a3d)break;else _0x24d5d5['push'](_0x24d5d5['shift']());}catch(_0x2ab768){_0x24d5d5['push'](_0x24d5d5['shift']());}}}(a0_0x1796,0x50b13),console[a0_0x52dd41(0xeb)](a0_0x52dd41(0xe4)));
```

## How To Run it for .js file output?
web-assets-aggregator generate --output js --target [target file] --sources [list of .js/.ts sources separated with commas without spaces]
### Example
- Example using files: web-assets-aggregator generate --output js --target ./dist/aggregated.js --sources ./example_sources/ts-and-js/a.ts,./example_sources/ts-and-js/b.ts,./example_sources/ts-and-js/c.js
- Example using * wildcard: web-assets-aggregator generate --output js --target ./dist/aggregated.js --sources ./example_sources/ts-and-js/*.ts,./example_sources/ts-and-js/*.js

## How To Run it for .css file output?
web-assets-aggregator generate --output css --target [target file] --sources [list of .scss/.css sources separated with commas without spaces]
### Example
- Example using files: web-assets-aggregator generate --output css --target ./dist/aggregated.min.css --sources ./example_sources/scss-and-css/a.scss,./example_sources/scss-and-css/b.scss,./example_sources/scss-and-css/c.css
- Example using * wildcard: web-assets-aggregator generate --output css --target ./dist/aggregated.min.css --sources ./example_sources/scss-and-css/*.scss,./example_sources/scss-and-css/*.css

## License
BSD2 License (since, 3rd party is BSD2-Clause)
