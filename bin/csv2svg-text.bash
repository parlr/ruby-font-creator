#!/usr/bin/env bash
# DESCRIPTION
#   Create a SVG file for each line of the CSV
#
# USAGE
#   bash ./bin/csv2svg-text.bash
#
# @author: Édouard Lopez <dev+hpf@edouard-lopez.com>

inputFile="${1:-"$HPF_UNIHAN_READING_SHORT"}"

# Empty directory svg-text/
for f in "$HPF_SVGTEXT_DIR"/*; do rm -f "$f"; done
# set -x
while IFS=';' read -r unicode hanzi pinyin;
do
  outputFile="$HPF_SVGTEXT_DIR/$hanzi-x${unicode#U+*}.svg"

  printf "creating SVG-text: %s /%s/\n" "$hanzi" "$pinyin"
  xsltproc -o "$outputFile" \
    --stringparam unicode "$unicode" \
    --stringparam hanzi "$hanzi" \
    --stringparam pinyin "$pinyin" \
    "$HPF_XSLT_CSV2SVG" "$HPF_TPL_SVGTEXT"
done < "$inputFile"
# set +x