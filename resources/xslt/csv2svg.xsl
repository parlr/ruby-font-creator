<?xml version="1.0" encoding="UTF-8"?>
<!--
@description
  Place hanzi and pinyin in the correct element
@upstream: true
-->
<xsl:stylesheet version="1.0"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"

  exclude-result-prefixes="#default xsl xs"
>

<xsl:output method="xml" indent="yes"/>
<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
<!-- ++++++++++++++++++++++++++ CONSTANT +++++++++++++++++++++++++ -->
<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<xsl:variable  name="emptyString" select="''" />

<!-- When we want to strip content using a CLASS -->
<xsl:param   name="hanzi" select="NO-HANZI" />
<xsl:param   name="pinyin" select="NO-PINYIN" />
<xsl:param   name="unicode" select="NO-PINYIN" />


<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
<!-- ++++++++++++++++++++++++++ TEMPLATE +++++++++++++++++++++++++ -->
<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<xsl:template match="/">
<xsl:message>WIP: <xsl:value-of select="$hanzi" />/<xsl:value-of select="$pinyin" />/</xsl:message>
  <xsl:apply-templates />
</xsl:template>


<!-- the character name -->
<xsl:template match="@glyph-name">
    <xsl:attribute name="glyph-name">
      <xsl:value-of select="concat($unicode, ': ', $hanzi, '/', $pinyin,'/')" />
    </xsl:attribute>
</xsl:template>


<!-- the glyph -->
<xsl:template match="@unicode">
    <xsl:attribute name="unicode">
      <xsl:value-of select="$hanzi" />
    </xsl:attribute>
</xsl:template>


<xsl:template match="*[@id='hanzi-glyph']/text()">
  <xsl:value-of select="$hanzi" />
</xsl:template>


<xsl:template match="*[@id='pinyin-text']/text()">
  <xsl:value-of select="$pinyin" />
</xsl:template>

<xsl:template match="@*|node()">
  <xsl:copy>
    <xsl:apply-templates select="@*|node()"/>
  </xsl:copy>
</xsl:template>


</xsl:stylesheet>
