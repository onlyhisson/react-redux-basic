const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    index: [
      'babel-polyfill', // 브라우저에 EX2015 환경을 갖추기 위한 폴리필 추가
      './src/index.js'  // 진입점을 지정, 꼭 *.jsx일 필요X
    ]
  },
  output: {
    path: path.join(__dirname, 'build'), // 번들된 파일의 경로를 지정, 여러 운영체제에서 가능하게 한다.
    filename: '[name].js'
  },
  target: 'web',
  module: {
    loaders: [{
      loader: 'babel-loader',
      include: [path.resolve(__dirname, 'src')],
      exclude: /node_modules/,
      test: /\.js$/,
      query: {
        presets: ['react', 'es2015', 'stage-0'] // babel 프리셋을 지정, 코드 처리 정의
      }
    }, {
      loader: 'json-loader',    // JSON 파일을 모의 영화 데이터베이스로 사용
      test: /\.json$/
    }, {
      loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[local]__[hash:base64:5]'),// CSS 스타일 추출, 하나의 파일로 만든다.
      test: /\.css$/,
      exclude: /node_modules/
    }]
  },
  resolve: {
    modulesDirectories: [
      './node_modules',
      './src'
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')// CSS 추출을 위한 플러그인 설정
  ]
}
