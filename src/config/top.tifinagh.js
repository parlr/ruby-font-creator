import path from 'path'
import layout from '../layouts'

export default {
  canvas: { width: 80, height: 80 },
  dataSource: path.resolve('./src/data.json'),
  get destFilename() {
    return path.resolve(`./build/${this.fontName}`)
  },
  baseFontFilepath: path.resolve(
    './resources/fonts/NotoSans/NotoSansTifinagh-Regular.ttf'
  ),
  annotationFontFilepath: path.resolve(
    './resources/fonts/NotoSans/NotoSans-Regular.hinted.ttf'
  ),
  fontName: 'RFC-Tifinagh-regular',
  formats: ['ttf', 'woff2'],
  inputFiles: './build/**/*.svg',
  workingDir: path.resolve('./build/svg'),
  get layout() {
    return {
      base: layout.base.bottom(this.canvas),
      annotation: layout.annotation.top(this.canvas)
    }
  }
}
