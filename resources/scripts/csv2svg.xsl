<?xml version="1.0" encoding="UTF-8"?>
<!--
@description
	Place hanzi and pinyin in the correct element
@upstream: true
-->
<xsl:stylesheet version="2.0"
  xmlns="http://www.w3.org/2000/svg"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"

	exclude-result-prefixes="#default xsl xs"
>

<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
<!-- ++++++++++++++++++++++++++ CONSTANT +++++++++++++++++++++++++ -->
<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<xsl:variable	 name="emptyString" select="''" />

<!-- When we want to strip content using a CLASS -->
<xsl:param   name="hanzi" select="NO-HANZI" />
<xsl:param   name="pinyin" select="NO-PINYIN" />


<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
<!-- ++++++++++++++++++++++++++ TEMPLATE +++++++++++++++++++++++++ -->
<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<xsl:template match="/">
<xsl:message>Processing</xsl:message>
<!-- font/glyph/@glyph-name -->
<!-- font/glyph/@unicode -->
  <xsl:apply-templates />
</xsl:template>


<xsl:template match="*[@id='hanzi-glyph']/text()">
  <xsl:value-of select="$hanzi" />
</xsl:template>

<xsl:template match="*[@id='pinyin-text']">
  <xsl:value-of select="$pinyin" />
</xsl:template>


<xsl:template match="@*|node()">
  <xsl:copy>
    <xsl:apply-templates select="@*|node()"/>
  </xsl:copy>
</xsl:template>

</xsl:stylesheet>
