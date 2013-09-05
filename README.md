# Hanzi-pinyin-font

Font builder to help students of Chinese learn to read faster. In order to do so we created a font that append both the Character (漢字) and the pronociation (pīnyīn).

## Requirements

* `xsltproc` to create SVG text files ;
* `Inkscape` (`≥v0.49`) to create union of text element ;
* `Xvfb` due to [weak CLI support in `inkscape`](http://stackoverflow.com/questions/18630229/how-to-save-svg-file-with-inkscape-cli) ;
* `PHP`, [SVG-Icon-Font-Generator](https://github.com/madeyourday/SVG-Icon-Font-Generator) ;
* Also `bash` and `awk`

## Install

    git clone <project_URL>
    bash ./resources/scripts/install.bash

# Run

    bash ./resources/scripts/extract-unicode-pinyin.bash
