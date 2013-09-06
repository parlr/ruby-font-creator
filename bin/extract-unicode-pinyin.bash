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
isValid=()  # Indicate characters validity
char=()     # Contains characters' pinyin

[[ -e "$outputFile" ]] && rm  "$outputFile"


# @description List all valid characters. Validity is defined when a unicode
#   has all the following fields (spread on different line):
#     * kDefinition field ;
#     * kMandarin field
# @param    $1|$inputFile  string   'Unihan Reading' data
# @return    void
function listValidChars() {
  while read -r unicode field pinyin
  do
    [[ $unicode = U+* ]] || continue;

    case "$field" in
      kDefinition)
        isValid[16#${unicode#U+}]=1 # index is base 10 value of unicode
      ;;
      kMandarin)
        char[16#${unicode#U+}]="$pinyin"
      ;;
    esac
  done <"$inputFile"
}


# @description Send valid character to std ouput
# @param    $1|$char    array Contains characters' pinyin
# @param    $2|$isValid array Indicate characters validity
# @return    void
function printValidChars() {
  # ${!char[@]} expand to all keys/index of char[@]
  for uni in "${!char[@]}"
  do
    # skip invalid chars, don't need '$' in arithmetic context
    (( isValid[uni] )) || continue

    hex="$(printf "%X" $uni)"
    # $uni need to be converted from hex→decimal (%04X) and octal (%b)
    printf 'U+%04X;%b;%s\n' \
      "$uni" "\\u$hex" "${char[uni]}" \
    >> "$outputFile"
  done
}

printf "Selecting valid characters…\n"
listValidChars
printf "Storing valid characters…\n"
printValidChars
