#!/bin/bash

# TypeScript/JavaScript Aggregate and Obfuscate using cli with arguments

# Interface: npm run ts_js_aggregate_and_obfuscate [target file] [list of .js/.ts sources separated with commas without spaces]
# Example using files: npm run ts_js_aggregate_and_obfuscate ./dist/aggregated.js ./example_sources/ts-and-js/a.ts,./example_sources/ts-and-js/b.ts,./example_sources/ts-and-js/c.js
# Example using * wildcard: npm run ts_js_aggregate_and_obfuscate ./dist/aggregated.js ./example_sources/ts-and-js/*.ts,./example_sources/ts-and-js/*.js


sources=$(echo $2 | sed 's/,/ /g')
#echo $sources

dist_folder_path="$(dirname "${1}")"
if [ ! -d $dist_folder_path ]
then
  mkdir -p $dist_folder_path
fi

tsc --allowjs true --outFile $dist_folder_path/__temp_js_agg_file.js $sources
# TypeScript For a Single File
#tsc --outFile ./dist/d.js ./example_sources/ts-and-js/d.ts

javascript-obfuscator $dist_folder_path/__temp_js_agg_file.js --output $1
rm $dist_folder_path/__temp_js_agg_file.js
