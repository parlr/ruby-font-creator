<?php
include "SVGFont.php";
$svgFont = new SVGFont();
$svgFont->load("/path/to/font.svg");
$result = $svgFont->textToPaths("Simple text", 20);
