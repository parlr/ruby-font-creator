#!/usr/bin/env bash
# DESCRIPTION
#   Get resources online and extract seem so script work on latest data
#
# USAGE
#   bash ./scripts/install.bash
#
# @author: Édouard Lopez <dev+hpf@edouard-lopez.com>

scriptDir="$(dirname "$0")" # emplacement du script
cd "$scriptDir"

cd ../unihan

# clean previous files
rm Unihan{.zip,} -rf && wget http://www.unicode.org/Public/UCD/latest/ucd/Unihan.zip
# rm ucd.all.flat.* && wget http://www.unicode.org/Public/UCD/latest/ucdxml/ucd.all.flat.zip
# rm ucd.all.grouped.* && wget http://www.unicode.org/Public/UCD/latest/ucdxml/ucd.all.grouped.zip

# Extract latest version
for f in *.zip; do unzip "$f"; done
