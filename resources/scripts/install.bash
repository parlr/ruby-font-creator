#!/usr/bin/env bash
# DESCRIPTION
#   Get resources online and extract seem so script work on latest data
#
# USAGE
#   bash ./scripts/install.bash
#
# @author: Édouard Lopez <dev+hpf@edouard-lopez.com>

(
  scriptDir="$(dirname "$0")" # emplacement du script
  cd "$scriptDir"

  cd ../unihan

  # clean previous files
  wget http://www.unicode.org/Public/UCD/latest/ucd/Unihan.zip
  wget http://www.unicode.org/Public/UCD/latest/ucdxml/ucd.all.flat.zip
  wget http://www.unicode.org/Public/UCD/latest/ucdxml/ucd.all.grouped.zip

  # Extract latest version
  for f in *.zip; do
    unzip -o "$f";
    rm "$f"
  done

  # cd ../saxon
  # wget http://sourceforge.net/projects/saxon/files/latest/download?source=files -O saxon-HE.zip
  # unzip -o saxon-HE.zip

  cd ../fonts
  wget https://raw.github.com/android/platform_frameworks_base/master/data/fonts/DroidSansFallbackFull.ttf
)
