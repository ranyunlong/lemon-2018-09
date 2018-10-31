// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-px-to-viewport": {
      "unitToConvert": 'px', // 要转换的单位
      "viewportWidth": 720, //设计稿的宽度
      "viewportUnit": 'vmin',
      "fontViewportUnit": 'vmin'
    }
  }
}
