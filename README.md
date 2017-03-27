# Hanzi-pinyin-font

> I'm **restarting the project**, informations below might not accurate while this message is present. 

Font builder to help students of Chinese learn to read faster. In order to do so we created a font that append both the Character (漢字) and the pronociation (pīnyīn).

| top  | bottom | left-downward | left-upward | right-downward | right-upward |
| ------- | ---------------- | ------- | ---------------- | ------- | ---------------- |
| ![](resources/tpl/annotation-top.png)  | ![bottom](resources/tpl/annotation-bottom.png) | ![left-downward](resources/tpl/annotation-left-downward.png) | ![left-upward](resources/tpl/annotation-left-upward.png) | ![right-downward](resources/tpl/annotation-right-downward.png) | ![right-upward](resources/tpl/annotation-right-upward.png) |


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
