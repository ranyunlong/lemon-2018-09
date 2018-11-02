'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

// ora 在控制台里显示loading 进度条的
const ora = require('ora')
// 递归删除文件的 删除目录
const rm = require('rimraf')
const path = require('path')
// 控制台高亮显示文字
const chalk = require('chalk')
// webpack
const webpack = require('webpack')
// 配置文件 公共配置文件
const config = require('../config')
// 打包模式的配置文件 prod生产模式
const webpackConfig = require('./webpack.prod.conf')

// ora 模块
const spinner = ora('building for production...')
spinner.start()


// 删除掉dist 目录的文件
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
