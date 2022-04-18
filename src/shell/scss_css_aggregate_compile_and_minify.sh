#!/bin/bash

# Scss/Css aggregate, compile and minify using cli with arguments

# Interface: npm run scss_css_aggregate_compile_and_minify [target file] [list of .scss/.css sources separated with commas without spaces]
# Example using files: npm run scss_css_aggregate_compile_and_minify ./dist/aggregated.min.css ./example_sources/scss-and-css/a.scss,./example_sources/scss-and-css/b.scss,./example_sources/scss-and-css/c.css
# Example using * wildcard: npm run scss_css_aggregate_compile_and_minify ./dist/aggregated.min.css ./example_sources/scss-and-css/*.scss,./example_sources/scss-and-css/*.css


sources=$(echo $2 | sed 's/,/ /g')
#echo $sources

dist_folder_path="${1%/*}/"
if [ ! -d $dist_folder_path ]
then
     mkdir -p $dist_folder_path
fi

# Aggregate all files to one scss file
cat $sources > $dist_folder_path/__temp_scss_agg_file.scss

# Compile aggregated scss file into css file
sass --no-source-map $dist_folder_path/__temp_scss_agg_file.scss $dist_folder_path/__temp_scss_agg_file.css
rm $dist_folder_path/__temp_scss_agg_file.scss

# Minify css file
minify $dist_folder_path/__temp_scss_agg_file.css > $1
rm $dist_folder_path/__temp_scss_agg_file.css
