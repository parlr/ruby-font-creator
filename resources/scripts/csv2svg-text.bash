#!/usr/bin/env bash
# DESCRIPTION
#   Create a SVG file for each line of the CSV
#
# USAGE
#   bash ./resources/scripts/csv2svg-text.bash
#
# @author: Édouard Lopez <dev+hpf@edouard-lopez.com>

scriptDir="$(dirname "$0")" # emplacement du script
. "$scriptDir"/envrc # project variables

inputFile="${2:-"$HPF_UNIHAN_READING_SHORT"}"

while IFS=';' read -r unicode hanzi pinyin;
do
  outputFile="$HPF_SVGTEXT_DIR/$hanzi-x${unicode#U+*}.svg"

  xsltproc -o "$outputFile" \
    --stringparam unicode "$unicode" \
    --stringparam hanzi "$hanzi" \
    --stringparam pinyin "$pinyin" \
    "$HPF_XSLT_CSV2SVG" "$HPF_TPL_SVGTEXT"
done < "$inputFile"
