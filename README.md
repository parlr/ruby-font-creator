[![Build Status](https://travis-ci.org/parlr/Hanzi-Pinyin-Font.svg?branch=master)](https://travis-ci.org/parlr/Hanzi-Pinyin-Font)

# Ruby Font Creator

Font creator to help students **learn and read foreign languages faster** by appending pronunciation or meaning to each glyph.

### Features

| languages | preview | state | repository | base-font
| --- | :---: | :---: | --- | --- |
| Chinese | ![top](resources/tpl/annotation-top.png)  | **✔** | [hanzi-pinyin-font](https://github.com/parlr/hanzi-pinyin-font/releases) | [DroidSansFallbackFull](https://github.com/parlr/platform_frameworks_base/blob/562c45cc841681ed80d4e94515b23c28eb60eae4/data/fonts/DroidSansFallbackFull.ttf)
| :speaking_head: [request new one](https://github.com/parlr/ruby-font-creator/issues/new) | - | - | - | provide an open-source font |

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

This project use fonts under open-source licenses :
[DejaVuSans](https://github.com/TFTFonts/DejaVuSans),
[DroidSansFallbackFull](https://github.com/parlr/platform_frameworks_base/blob/562c45cc841681ed80d4e94515b23c28eb60eae4/data/fonts/DroidSansFallbackFull.ttf),
[Noto Sans CJK](https://github.com/nodebox/opentype.js/issues/273),


## License

> [Apache License 2.0](http://choosealicense.com/licenses/apache-2.0/)

## Contributors

* [Édouard Lopez](https://github.com/edouard-lopez/) ;
* [Hugo Lopez](https://github.com/hugolpz)
