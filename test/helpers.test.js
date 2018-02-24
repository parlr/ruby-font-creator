import test from 'ava'
import fs from 'fs'
import path from 'path'

import helpers from '../src/helpers'

test('setFontName(): use name from config file', t => {
  const argv = {}
  const config = { fontName: 'RFC-config-font-name' }

  const newConfig = helpers.setFontName(config, argv)
  t.is(newConfig.fontName, 'RFC-config-font-name')
})

test('setFontName(): use name from CLI argument --font-name', t => {
  const argv = { fontName: 'RFC-cli-font-name' }
  const config = { fontName: 'RFC-config-font-name' }

  const newConfig = helpers.setFontName(config, argv)
  t.is(newConfig.fontName, 'RFC-cli-font-name')
})

test('setDataSource(): use default path', t => {
  const argv = {}
  const config = { dataSource: './data.json' }

  const newConfig = helpers.setDataSource(config, argv)
  t.is(newConfig.dataSource, './data.json')
})

test('setDataSource(): use CLI --data as path', t => {
  const argv = { data: '/tmp/../tmp/data.json' }
  const config = { dataSource: './data.json' }

  const newConfig = helpers.setDataSource(config, argv)
  t.is(newConfig.dataSource, '/tmp/data.json')
})

test('setBuildConfig(): use default config', t => {
  const argv = {}

  const config = helpers.setBuildConfig(argv)
  t.truthy(config.layout)
})

test('setBuildConfig(): use CLI --config', t => {
  const argv = { config: './config/bottom.js' }

  const config = helpers.setBuildConfig(argv)
  t.is(config.layout.annotation.anchor, 'bottom center')
})

test('prepare()', t => {
  const config = { workingDir: '.whatever' }

  helpers.prepare(config).then(() => {
    t.true(fs.stat(config.workingDir))
    fs.rmdir(config.workingDir)
  })
})

test('writeFont()', t => {
  const content = 'hello'
  const destination = '.whatever.txt'

  helpers.writeFont(content, destination).then(() => {
    t.true(fs.stat(destination))
    fs.unlink(destination)
  })
})

test('generateFontFiles()', t => {
  const content = { ttf: 'font-data' }
  const config = {
    formats: ['ttf'],
    fontName: 'RFC-config-font-name',
    destFilename: '.whatever'
  }

  helpers.generateFontFiles(content, config).then(() => {
    const directoryPath = path.resolve(`./build`)

    t.true(fs.stat(`${directoryPath}/RFC-config-font-name.ttf`))
    fs.unlink(`${directoryPath}/RFC-config-font-name.ttf`)
  })
})
