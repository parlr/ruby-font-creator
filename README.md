[![Build Status](https://travis-ci.org/parlr/Hanzi-Pinyin-Font.svg?branch=master)](https://travis-ci.org/parlr/Hanzi-Pinyin-Font)

# Hanzi-pinyin-font

Font builder to help students of Chinese learn to read faster. In order to do so we created a font that append both the Character (漢字) and the pronociation (pīnyīn).

### Features

<style>
	.wip {color: orange; font-size: 1.75rem; font-weight: normal }
	.done {color: #0e8a16; font-size: 1.75rem; }
	.todo {color: #d93f0b; font-size: 1.75rem; }
</style>

| ruby position-direction | preview | state | comments
| --- | :---: | :---: | --- |
| top | ![top](resources/tpl/annotation-top.png)  | <b class="wip">★</b> | work in progress
| bottom| ![bottom](resources/tpl/annotation-bottom.png)  | <b class="todo">✖</b> | todo
| left-downward| ![left-downward](resources/tpl/annotation-left-downward.png)  | <b class="todo">✖</b> | todo
| left-upward| ![left-upward](resources/tpl/annotation-left-upward.png)  | <b class="todo">✖</b> | todo
| right-downward| ![right-downward](resources/tpl/annotation-right-downward.png)  | <b class="todo">✖</b> | todo
| right-upward| ![right-upward](resources/tpl/annotation-right-upward.png)  | <b class="todo">✖</b> | todo

**Legend:**
<b class="todo">✖</b>→
<b class="wip">★</b>→
<b class="done">✔</b>


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
