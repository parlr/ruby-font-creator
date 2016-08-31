#!/usr/bin/env make
# DESCRIPTION
#	Utility to generate the fonts
#
# USAGE
#	make build-font
#
# AUTHOR
#	Édouard Lopez <dev+hpf@edouard-lopez.com>

ifneq (,)
This makefile requires GNU Make.
endif

# force use of Bash
SHELL := /bin/bash

scriptDir:="." # emplacement du script
APP_DIR:=bin
RESOURCES_DIR:=./resources

# Verbosity flag (boolean)
HPF_VERBOSE:=true

# XSLT
HPF_XSLT_DIR:=${RESOURCES_DIR}/xslt
HPF_XSLT_CSV2SVG:=${HPF_XSLT_DIR}/csv2svg.xsl

# FONTS
HPF_FONT_DIR:=${RESOURCES_DIR}/fonts

# Unihan Resources
HPF_UNIHAN_DIR:=${RESOURCES_DIR}/unihan
HPF_UNIHAN_READING:=${HPF_UNIHAN_DIR}/Unihan_Readings.txt

# Templates
HPF_TPL_DIR:=${RESOURCES_DIR}/tpl
HPF_TPL_SVGTEXT:="${RESOURCES_DIR}/tpl/svg.text-x\#\#\#.tpl.svg"
HPF_TPL_SVGPATH:="${RESOURCES_DIR}/tpl/svg.path-x\#\#\#.tpl.svg"

# SVG
HPF_SVG_DIR:=${RESOURCES_DIR}/svg
HPF_SVGTEXT_DIR:=${HPF_SVG_DIR}-text
HPF_SVGFONT_DIR:=${HPF_SVG_DIR}-font

# TMP
HPF_TMP_DIR:=.tmp
HPF_UNIHAN_READING_SHORT:=${HPF_TMP_DIR}/unicode-pinyin.csv

# INKSCAPE OPTIMIZATION
HPF_MINIMAL_XDG:=${APP_DIR}/local
# env
XDG_CONFIG_HOME:=${HPF_MINIMAL_XDG}/config
XDG_CACHE_HOME:=${HPF_MINIMAL_XDG}/cache
XDG_DATA_HOME:=${HPF_MINIMAL_XDG}/share
# GTK2_RC_FILES:=${HPF_MINIMAL_XDG}/config/gtk-2.0/gtkrc
# fonts
FONTCONFIG_PATH:=${HPF_MINIMAL_XDG}/config/fontconfig
FONTCONFIG_FILE:=${HPF_MINIMAL_XDG}/config/fontconfig/fonts.conf

build-font: svg-text2svg-font
	gulp build-font

svg-text2svg-font: csv2svg-text ${HPF_SVGFONT_DIR}/*.svg
${HPF_SVGFONT_DIR}/%.svg:
	export HPF_VERBOSE="${HPF_VERBOSE}"; \
	export HPF_SVGTEXT_DIR="${HPF_SVGTEXT_DIR}"; \
	export HPF_SVGFONT_DIR="${HPF_SVGFONT_DIR}"; \
	${APP_DIR}/svg-text2svg-font.bash "${HPF_UNIHAN_READING_SHORT}"

csv2svg-text: extract-unicode-pinyin ${HPF_SVGTEXT_DIR}/*.svg
${HPF_SVGTEXT_DIR}/%.svg:
	export HPF_SVGTEXT_DIR="${HPF_SVGTEXT_DIR}"; \
	export HPF_XSLT_CSV2SVG="${HPF_XSLT_CSV2SVG}"; \
	export HPF_TPL_SVGTEXT="${HPF_TPL_SVGTEXT}"; \
	${APP_DIR}/csv2svg-text.bash "${HPF_UNIHAN_READING_SHORT}"



extract-unicode-pinyin: extract-data ${HPF_UNIHAN_READING_SHORT}
${HPF_UNIHAN_READING_SHORT}:
	${APP_DIR}/extract-unicode-pinyin.bash "${HPF_UNIHAN_READING}" "${HPF_UNIHAN_READING_SHORT}"

install: install-requirements get-data

get-data: download-fonts download-data extract-data

extract-data: download-data ${HPF_UNIHAN_DIR}/*.zip
${HPF_UNIHAN_DIR}/%.zip:
	cd "${HPF_UNIHAN_DIR}"; \
	for archive in *.zip; do unzip -o "$$archive"; done

download-data: download-fonts ${HPF_UNIHAN_DIR}/*.zip
${HPF_UNIHAN_DIR}/%.zip:
	cd ${HPF_UNIHAN_DIR}; \
	[[ ! -f "Unihan.zip" ]] \
		&& wget http://www.unicode.org/Public/UCD/latest/ucd/Unihan.zip \
		|| true; \
	[[ ! -f "ucd.all.flat.zip" ]] \
		&& wget http://www.unicode.org/Public/UCD/latest/ucdxml/ucd.all.flat.zip \
		|| true; \
	[[ ! -f "ucd.all.grouped.zip" ]] \
		&& wget http://www.unicode.org/Public/UCD/latest/ucdxml/ucd.all.grouped.zip \
		|| true;

download-fonts: create-require-dirs ${HPF_FONT_DIR}/*.otf
${HPF_FONT_DIR}/%.otf:
	cd ${HPF_FONT_DIR}; \
	wget https://github.com/googlei18n/noto-cjk/raw/master/NotoSansTC-Regular.otf; \
	wget https://github.com/googlei18n/noto-cjk/blob/master/LICENSE

create-require-dirs:
	required=( \
		"${HPF_XSLT_DIR}" \
		"${HPF_FONT_DIR}" \
		"${HPF_UNIHAN_DIR}" \
		"${HPF_TPL_DIR}" \
		"${HPF_SVG_DIR}" \
		"${HPF_SVGTEXT_DIR}" \
		"${HPF_SVGFONT_DIR}" \
		"${HPF_TMP_DIR}" \
		"${HPF_MINIMAL_XDG}" \
		"${XDG_CONFIG_HOME}" \
		"${XDG_CACHE_HOME}" \
		"${XDG_DATA_HOME}" \
	); \
	for dir in "$${required[@]}"; do [[ ! -d "$$dir" ]] && mkdir -p "$$dir" || true; done

install-requirements:
	sudo add-apt-repository ppa:inkscape.dev/trunk && sudo apt-get update
	sudo apt-get install xsltproc xvfb inkscape-trunk php5 bash gawk
	npm install

clean-svg:
	rm -rf "${HPF_SVG_DIR}"
clean-svg-text:
	rm -rf "${HPF_SVGTEXT_DIR}"
clean-svg-font:
	rm -rf "${HPF_SVGFONT_DIR}"
clean-tmp:
	rm -rf "${HPF_TMP_DIR}"

clean: clean-svg clean-svg-text clean-svg-font clean-tmp
