#!/usr/bin/env bash
# DESCRIPTION
#   Extract unicode and pinyin prononciation and generate the character
#
# USAGE
#   bash ./scripts/extract-unicode-pinyin.bash
#
# @author: Édouard Lopez <dev+hpf@edouard-lopez.com>

inputFile="${1:-./unihan/Unihan/Unihan_Readings.txt}"
outputFile="${2:-./unihan/unicode-pinyin.csv}"


[[ -e "$outputFile" ]] && rm  "$outputFile"

while read -r unicode field pinyin;
do
  if [[ $unicode = U+* && $field = kMandarin ]]; then
    printf '%s;%b;%s\n' \
      "$unicode" \
      "\\u${unicode#U+}" \
      "$pinyin" \
    >> "$outputFile"
  fi
done < "$inputFile"
