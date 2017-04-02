[![Build Status](https://travis-ci.org/parlr/Hanzi-Pinyin-Font.svg?branch=master)](https://travis-ci.org/parlr/Hanzi-Pinyin-Font)

# Hanzi-pinyin-font

Font builder to help students of Chinese learn to read faster. In order to do so we created a font that append both the Character (漢字) and the pronociation (pīnyīn).

### Features

| ruby position-direction | preview | state | comments
| --- | :---: | :---: | --- |
| top | ![top](resources/tpl/annotation-top.png)  | **★** | work in progress
| bottom| ![bottom](resources/tpl/annotation-bottom.png)  | **✖** | todo
| left-downward| ![left-downward](resources/tpl/annotation-left-downward.png)  | **✖** | todo
| left-upward| ![left-upward](resources/tpl/annotation-left-upward.png)  | **✖** | todo
| right-downward| ![right-downward](resources/tpl/annotation-right-downward.png)  | **✖** | todo
| right-upward| ![right-upward](resources/tpl/annotation-right-upward.png)  | **✖** | todo

**Legend:**
**✖**→
**★**→
**✔**


## Install

**Requirements**:  `nodejs`, [`NPM`](http://npmjs.org/).

	npm install

## Usage

**Requirements:** `JSON` file describing _glyph_-_prononciation_ relation in [src/data.json](src/data.json).

	npm start

## Font

This project use [Noto Sans CJK](https://github.com/googlei18n/noto-cjk) as it [support Chinese and is under open licence](https://www.wikiwand.com/en/Noto_fonts).

## License

> [Apache License 2.0](http://choosealicense.com/licenses/apache-2.0/)

## Contributors

* [Édouard Lopez](https://github.com/edouard-lopez/) ;
* [Hugo Lopez](https://github.com/hugolpz)
