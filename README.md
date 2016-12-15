# Hanzi-pinyin-font

> 2016/12/15: I'm **revamping the project**, informations below might not accurate while this message is present. 
----

Font builder to help students of Chinese learn to read faster. In order to do so we created a font that append both the Character (漢字) and the pronociation (pīnyīn).

## Requirements

* `xsltproc` to create SVG text files ;
* `Inkscape` (**`≥v0.49`**) to create union of text element ;
* `Xvfb` due to [weak CLI support in `inkscape`](http://stackoverflow.com/questions/18630229/how-to-save-svg-file-with-inkscape-cli) ;
* `nodejs`, [`NPM`](http://npmjs.org/)  and [`gulp-iconfont`](https://www.npmjs.org/package/gulp-iconfont);
* Also `bash` and `awk`

<!-- sudo apt-get install make git                                     # install tooling -->


## Install

```bash
git clone git@github.com:edouard-lopez/Hanzi-Pinyin-Font.git      # get repository
cd ./Hanzi-Pinyin-Font
npm install                                                       # install dependencies
```

## Build font

The process is extremely slow and **take ~20 hours** due to lack of real CLI support in [`Inkscape`](http://stackoverflow.com/questions/18630229/how-to-save-svg-file-with-inkscape-cli).

```bash
make build-font
```

### Benchmark
```bash
command time -a -o make build-font
```

## Font

This project use [Noto Sans CJK](https://github.com/googlei18n/noto-cjk) as it [support Chinese and is under open licence](https://www.wikiwand.com/en/Noto_fonts).
