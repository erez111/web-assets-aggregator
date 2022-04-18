# General
NodeJS CLI package that aggregates, compile, minify and obfuscates web assets using cli with arguments.<br />
Ideal for use within your npm module within "scripts" as "postbuild" or during DevOps CI process.

## Overview
Web Assets are TypeScript, JavaScript & style sheets: .SCSS, .CSS files. 

Using this package, you can aggregate, minify & obfuscate .js output file. <br />
Using this package, you can aggregate, compile & minify .css output file.


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
