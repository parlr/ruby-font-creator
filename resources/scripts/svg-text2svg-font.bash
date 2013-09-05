#!/usr/bin/env bash
# DESCRIPTION
#   Select all text node and create a union of them
#
# USAGE
#   bash ./resources/scripts/svg-text2svg-font.bash
#
# @author: Édouard Lopez <dev+hpf@edouard-lopez.com>

scriptDir="$(dirname "$0")" # emplacement du script
. "$scriptDir"/envrc # project variables

inputFile="${2:-"$HPF_UNIHAN_READING_SHORT"}"


Fake a X server
Xvfb :8 -screen 0 1024x768x8 -extension RANDR &> /dev/null &
XVFB_PID=$!
echo $XVFB_PID > ./xvfb.pid
export DISPLAY=":8"


# cp 㐀-x3400.svg test-union-cli.svg; inkscape -z -f test-union-cli.svg --select=hanzi --select=pinyin --verb=SelectionUnion --verb=FileSave --verb=FileClose

kill $XVFB_PID
