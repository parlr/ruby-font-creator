import TextToSVG from 'text-to-svg'
import jsdom from 'jsdom'

export default {
  loadFont: fontFilepath => TextToSVG.loadSync(fontFilepath),
  getBase: (engine, glyph = '汉字', options) => engine.getPath(glyph, options),
  getAnnotation: (engine, text = 'hanzi', options) =>
    engine.getPath(text, options),
  getData: doc => {
    const svg = jsdom.jsdom(doc)
    const path = svg.querySelector('path')

    return path.attributes.getNamedItem('d').value
  }
}
