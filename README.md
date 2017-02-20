# Hanzi-pinyin-font

> I'm **restarting the project**, informations below might not accurate while this message is present. 

Font builder to help students of Chinese learn to read faster. In order to do so we created a font that append both the Character (漢字) and the pronociation (pīnyīn).

## Input/Output
**Input:** a free license unicode font, a json pairing CJK unicode characters and phonetic value (one single value).

**Output (Our objective):** [serie of svg files with the glyph and the pinying], `{yourFont}-{yourPhonetic}-{position}-{direction}.svg`, and ttf version.

<p align="center">
  <img width="100px" src="https://github.com/edouard-lopez/Hanzi-Pinyin-Font/blob/master//resources/tpl/annotation-top.png?raw=true" alt="Schematic image"/>
  <img width="100px" src="https://github.com/edouard-lopez/Hanzi-Pinyin-Font/blob/master//resources/tpl/annotation-bottom.png?raw=true" alt="Schematic image"/>
  </p>
  <p align="center">
  <img width="100px" src="https://github.com/edouard-lopez/Hanzi-Pinyin-Font/blob/master//resources/tpl/annotation-left-downward.png?raw=true" alt="Schematic image"/>
  <img width="100px" src="https://github.com/edouard-lopez/Hanzi-Pinyin-Font/blob/master//resources/tpl/annotation-left-upward.png?raw=true" alt="Schematic image"/>
  </p>
  <p align="center">
  <img width="100px" src="https://github.com/edouard-lopez/Hanzi-Pinyin-Font/blob/master//resources/tpl/annotation-right-downward.png?raw=true" alt="Schematic image"/>
  <img width="100px" src="https://github.com/edouard-lopez/Hanzi-Pinyin-Font/blob/master//resources/tpl/annotation-right-upward.png?raw=true" alt="Schematic image"/>
</p>

And flexibility for other variants.

## Requirements

* `nodejs`, [`NPM`](http://npmjs.org/) ;

## Install

	npm install 

## Usage

	npm start
	
## Font

This project use [Noto Sans CJK](https://github.com/googlei18n/noto-cjk) as it [support Chinese and is under open licence](https://www.wikiwand.com/en/Noto_fonts).

## License 

> Copyright (C) 2013 Hanzi Pinyin Font Project
> 
> Licensed under the Apache License, Version 2.0 (the "License");
> you may not use this file except in compliance with the License.
> You may obtain a copy of the License at
> 
>      http://www.apache.org/licenses/LICENSE-2.0
> 
> Unless required by applicable law or agreed to in writing, software
> distributed under the License is distributed on an "AS IS" BASIS,
> WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
> See the License for the specific language governing permissions and
> limitations under the License.
