#!/usr/bin/env bash
# DESCRIPTION
#   Extract unicode and pinyin prononciation and generate the character
#
# USAGE
#   bash ./scripts/extract-unicode-pinyin.bash
#
# @author: Édouard Lopez <dev+hpf@edouard-lopez.com>

scriptDir="$(dirname "$0")" # emplacement du script
. "$scriptDir"/envrc # project variables


inputFile="${1:-"$HPF_UNIHAN_READING"}"
outputFile="${2:-"$HPF_UNIHAN_READING_SHORT"}"

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
