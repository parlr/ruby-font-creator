# Hanzi-pinyin-font

Font builder to help students of Chinese learn to read faster. In order to do so we created a font that append both the Character (漢字) and the pronociation (pīnyīn).

## Requirements

* `xsltproc` to create SVG text files ;
* `Inkscape` (`≥v0.49`) to create union of text element ;
* `Xvfb` due to [weak CLI support in `inkscape`](http://stackoverflow.com/questions/18630229/how-to-save-svg-file-with-inkscape-cli) ;
* `PHP`, [SVG-Icon-Font-Generator](https://github.com/madeyourday/SVG-Icon-Font-Generator) ;
* Also `bash` and `awk`

## Install

```bash
# requirements
apt-get install xsltproc xvfb inkscape php5 bash gawk
```

```bash
git clone git@github.com:edouard-lopez/Hanzi-Pinyin-Font.git
bash bin/install.bash
```

## Build font

    command time -a -o logs/extract-unicode-pinyin.log bash bin/extract-unicode-pinyin.bash
    command time -a -o logs/csv2svg-text.log bash bin/csv2svg-text.bash
    command time -a -o logs/svg-text2svg-font.log bash bin/svg-text2svg-font.bash

