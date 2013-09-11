<?php

/**
 * This class represents SVG pa
 * @author Łukasz Ledóchowski lukasz@ledochowski.pl
 * @version 0.1
 */
class SVGFont {

    protected $id = '';
    protected $horizAdvX = 0;
    protected $unitsPerEm = 0;
    protected $ascent = 0;
    protected $descent = 0;
    protected $glyphs = array();

    /**
     * Function takes UTF-8 encoded string and returns unicode number for every character.
     * Copied somewhere from internet, thanks.
     */
    function utf8ToUnicode( $str ) {
        $unicode = array();
        $values = array();
        $lookingFor = 1;

        for ($i = 0; $i < strlen( $str ); $i++ ) {
            $thisValue = ord( $str[ $i ] );
            if ( $thisValue < 128 ) $unicode[] = $thisValue;
            else {
                if ( count( $values ) == 0 ) $lookingFor = ( $thisValue < 224 ) ? 2 : 3;
                $values[] = $thisValue;
                if ( count( $values ) == $lookingFor ) {
                    $number = ( $lookingFor == 3 ) ?
                        ( ( $values[0] % 16 ) * 4096 ) + ( ( $values[1] % 64 ) * 64 ) + ( $values[2] % 64 ):
                        ( ( $values[0] % 32 ) * 64 ) + ( $values[1] % 64 );

                    $unicode[] = $number;
                    $values = array();
                    $lookingFor = 1;
                }
            }
        }

        return $unicode;
    }

    /**
     * Function takes path to SVG font (local path) and processes its xml
     * to get path representation of every character and additional
     * font parameters
     */
    public function load($filename) {
        $this->glyphs = array();
        $z = new XMLReader;
        $z->open($filename);

        // move to the first <product /> node
        while ($z->read()) {
            $name = $z->name;

            if ($z->nodeType == XMLReader::ELEMENT) {
                if ($name == 'font') {
                    $this->id = $z->getAttribute('id');
                    $this->horizAdvX = $z->getAttribute('horiz-adv-x');
                }

                if ($name == 'font-face') {
                    $this->unitsPerEm = $z->getAttribute('units-per-em');
                    $this->ascent = $z->getAttribute('ascent');
                    $this->descent = $z->getAttribute('descent');
                }

                if ($name == 'glyph') {
                    $unicode = $z->getAttribute('unicode');
                    $unicode = $this->utf8ToUnicode($unicode);
                    $unicode = $unicode[0];

                    $this->glyphs[$unicode] = new stdClass();
                    $this->glyphs[$unicode]->horizAdvX = $z->getAttribute('horiz-adv-x');
                    if (empty($this->glyphs[$unicode]->horizAdvX)) {
                        $this->glyphs[$unicode]->horizAdvX = $this->horizAdvX;
                    }
                    $this->glyphs[$unicode]->d = $z->getAttribute('d');
                }
            }
        }

    }

    /**
     * Function takes UTF-8 encoded string and size, returns xml for SVG paths representing this string.
     * @param string $text UTF-8 encoded text
     * @param int $asize size of requested text
     * @return string xml for text converted into SVG paths
     */
    public function textToPaths($text, $asize) {
        $lines = explode("\n", $text);
        $result = "";
        $horizAdvY = 0;
        foreach($lines as $text) {
            $text = $this->utf8ToUnicode($text);
            $size =  ((float)$asize) / $this->unitsPerEm;
            $result .= "<g transform=\"scale({$size}) translate(0, {$horizAdvY})\">";
            $horizAdvX = 0;
            for($i = 0; $i < count($text); $i++) {
                $letter = $text[$i];
                $result .= "<path transform=\"translate({$horizAdvX},{$horizAdvY}) rotate(180) scale(-1, 1)\" d=\"{$this->glyphs[$letter]->d}\" />";
                $horizAdvX += $this->glyphs[$letter]->horizAdvX;
            }
            $result .= "</g>";
            $horizAdvY += $this->ascent + $this->descent;
        }

        return $result;
    }
}
