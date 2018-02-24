import fs from 'fs'

export default {
  saveSync: (filename, content) => {
    fs.writeFileSync(filename, content)
  },
  save: (filename, content) => fs.writeFileSync(filename, content),
  wrap: (text, annotation, options = { width: 80, height: 80 }) =>
    `<svg width="${options.width}" height="${options.height}">
        ${text}
        ${annotation}
      </svg>`
}
